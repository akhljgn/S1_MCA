# Calculate surface area and volume of a cuboid

def surface_area(length, width, height):
    return 2 * (length * width + width * height + height * length)

def volume(length, width, height):
    return length * width * height
