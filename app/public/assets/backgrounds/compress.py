import os
from PIL import Image, ImageOps

# Define the directory where the PNG files are located
directory = '/home/rock/Website/app/public/assets/backgrounds'

# Loop through all files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.png'):
        # Open the PNG file
        image = Image.open(os.path.join(directory, filename))

        # Resize the image to fit within 500x200
        ImageOps.fit(image, (500, 200), method=Image.LANCZOS, centering=(0.5, 0.5))

        # Check if the image is larger than 500x200
        if image.size[0] > 500 or image.size[1] > 200:
            # Crop the image to 500x200
            left = (image.size[0] - 500) // 2
            top = (image.size[1] - 200) // 2
            right = left + 500
            bottom = top + 200
            image = image.crop((left, top, right, bottom))

        # Save the image as JPEG with quality 75
        image.save(os.path.join(directory, f'{filename[:-4]}.webp'), quality=75)