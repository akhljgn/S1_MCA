from graphics._3D_graphics.cuboid import *
from graphics._3D_graphics.sphere import surface_area as s_a, volume as v
import graphics.circle as circle
from graphics.rectangle import perimeter, area

# Rectangle
length = int(input("Enter the length of rectangle: "))
width = int(input("Enter the width of rectangle: "))
print(f"Rectangle - Area: {area(length, width)}, Perimeter: {perimeter(length, width)}")

# Circle
radius = int(input("Enter the radius of circle: "))
print(f"Circle - Area: {circle.area(radius):.2f}, Perimeter: {circle.perimeter(radius):.2f}")

# Cuboid
length = int(input("Enter the length of cuboid: "))
width = int(input("Enter the width of cuboid: "))
height = int(input("Enter the height of cuboid: "))
print(f"Cuboid - Surface Area: {surface_area(length, width, height)}, Volume: {volume(length, width, height)}")

# Sphere
radius = int(input("Enter the radius of Sphere: "))
print(f"Sphere - Surface Area: {s_a(radius):.2f}, Volume: {v(radius):.2f}")