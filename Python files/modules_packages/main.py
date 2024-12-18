# Using Import * method

from graphics.rectangle import *
from graphics.circle import area as c_area, perimeter as c_perimeter

length = int(input("Enter the length of rectangle: "))
width = int(input("Enter the width of rectangle: "))
print(f"Rectangle - Area: {area(length, width)}, Perimeter: {perimeter(length, width)}")


radius = int(input("Enter the radius of circle: "))
print(f'Circle - Area: {c_area(radius):.2f}, Perimeter: {c_perimeter(radius):.2f}')