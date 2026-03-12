from PIL import Image
import sys

def remove_background(input_path, output_path, fuzz=60):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Get the background color from top-left pixel
    bg_pixel = img.getpixel((0, 0))
    
    for y in range(height):
        for x in range(width):
            pixel = img.getpixel((x, y))
            # Calculate distance using Manhattan distance for simplicity
            dist = abs(pixel[0] - bg_pixel[0]) + abs(pixel[1] - bg_pixel[1]) + abs(pixel[2] - bg_pixel[2])
            
            if dist < fuzz:
                alpha = int((dist / fuzz) * 255)
                # To prevent dark fringes, blend the color towards white (since text is white)
                # For the blue part, it naturally won't hit this fuzz limit if it's bright blue
                img.putpixel((x, y), (255, 255, 255, alpha))
            else:
                pass # Keep original
    
    img.save(output_path)

if __name__ == "__main__":
    remove_background("logo.png", "public/logo-nobg.png")
