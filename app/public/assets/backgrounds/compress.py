import json
import os
from thumbhash import image_to_thumbhash
from PIL import Image, ImageOps

# Define the directory where the PNG files are located
directory = '/home/rock/Website/app/public/assets/backgrounds'

output = []

# Loop through all files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.png'):
        # Open the PNG file
        image = Image.open(os.path.join(directory, filename))

        new_size = (1000, 400)

        # Resize the image to fit within 500x200
        image = ImageOps.fit(image, new_size, method=Image.LANCZOS, centering=(0.5, 0.5))

        path = os.path.join(directory, f'{filename[:-4]}.webp')

        # Save the image as JPEG with quality 75
        image.save(path, quality=75)

        output.append({
            "id": filename[:-4],
            "thumbhash": image_to_thumbhash(path)
        })

print(json.dumps(output, indent=4))