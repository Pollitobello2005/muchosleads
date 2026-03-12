from PIL import Image

def convert_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            if a > 0:
                # Check if the pixel is part of the blue tips
                # The blue tips have a strong blue component compared to red/green
                if b > r + 30 and b > g + 30:
                    pass # Keep the original blue pixel exactly as is
                else:
                    # It's part of the text (which is white/gray).
                    # We change the color to a dark premium navy (#0F172A)
                    # We keep the exact same alpha value for smooth anti-aliased edges
                    img.putpixel((x, y), (15, 23, 42, a))

    img.save(output_path)

if __name__ == "__main__":
    convert_logo("public/logo-nobg.png", "public/logo-dark.png")
