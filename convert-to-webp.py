"""
PRISMA COLOR — Script de conversion PNG → WebP
Place ce fichier à la racine de ton projet Vite et lance :
    python3 convert-to-webp.py

Prérequis : pip install Pillow
Il génère les .webp à côté des .png originaux dans /public/images/
Les originaux .png sont conservés comme fallback.
"""

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("❌ Pillow non installé. Lance : pip install Pillow")
    exit(1)

# Dossier contenant les images du carousel et des produits
IMAGES_DIR = Path("public/images")

# Liste des images du carousel Hero (priorité haute)
CAROUSEL_IMAGES = [
    "Ecologia.png",
    "Fongex.png",
    "Antihumidite.png",
    "PrismaFibre.png",
]

# Qualité WebP (85 = bon compromis qualité/poids, 90+ pour images premium)
WEBP_QUALITY = 85

def convert_image(src_path: Path, quality: int = WEBP_QUALITY) -> Path | None:
    dst_path = src_path.with_suffix(".webp")

    if dst_path.exists():
        src_size = src_path.stat().st_size
        dst_size = dst_path.stat().st_size
        print(f"  ⏩ Déjà converti : {dst_path.name} ({dst_size // 1024} KB)")
        return dst_path

    try:
        with Image.open(src_path) as img:
            # Conserver la transparence si présente (PNG avec alpha)
            if img.mode in ("RGBA", "LA"):
                img.save(dst_path, "WEBP", quality=quality, method=6, lossless=False)
            else:
                img = img.convert("RGB")
                img.save(dst_path, "WEBP", quality=quality, method=6)

        src_kb = src_path.stat().st_size // 1024
        dst_kb = dst_path.stat().st_size // 1024
        saving = round((1 - dst_kb / src_kb) * 100)
        print(f"  ✅ {src_path.name} → {dst_path.name}  |  {src_kb} KB → {dst_kb} KB  (−{saving}%)")
        return dst_path
    except Exception as e:
        print(f"  ❌ Erreur sur {src_path.name} : {e}")
        return None


def main():
    if not IMAGES_DIR.exists():
        print(f"❌ Dossier introuvable : {IMAGES_DIR}")
        print("   Lance ce script depuis la racine de ton projet Vite.")
        exit(1)

    print(f"\n🎨 PRISMA COLOR — Conversion WebP")
    print(f"   Dossier : {IMAGES_DIR.resolve()}\n")

    # 1. Carousel Hero en priorité
    print("── Carousel Hero (priorité haute) ──")
    carousel_count = 0
    for name in CAROUSEL_IMAGES:
        src = IMAGES_DIR / name
        if src.exists():
            if convert_image(src):
                carousel_count += 1
        else:
            print(f"  ⚠️  Introuvable : {src}")

    # 2. Toutes les autres PNG du dossier
    print("\n── Autres images produits ──")
    other_count = 0
    for src in sorted(IMAGES_DIR.glob("*.png")):
        if src.name not in CAROUSEL_IMAGES:
            if convert_image(src):
                other_count += 1

    # 3. Sous-dossiers éventuels
    for src in sorted(IMAGES_DIR.rglob("**/*.png")):
        if src.name not in CAROUSEL_IMAGES and src.parent != IMAGES_DIR:
            if convert_image(src):
                other_count += 1

    total = carousel_count + other_count
    print(f"\n✨ Terminé — {total} image(s) convertie(s)\n")
    print("Prochaine étape : remplace Hero.tsx par la version optimisée fournie.")


if __name__ == "__main__":
    main()
