class Fraction:
    def __init__(self, num, deno):
        self.num = num  
        self.deno = deno  
    
    def set_num(self, num):
        self.num = num
    
    def set_deno(self, deno):
        if deno != 0:
            self.deno = deno
        else:
            print("Denominator cannot be zero.")
    
    def display(self):
        if self.deno == 0:
            print("Invalid fraction (denominator is zero).")
        else:
            print(f"{self.num}/{self.deno}")

fraction1 = Fraction(3, 4)  
fraction2 = Fraction(5, 8)

print("Fraction 1:")
fraction1.display()

print("Fraction 2:")
fraction2.display()

fraction1.set_num(7)
fraction1.set_deno(10)

print("Updated Fraction 1:")
fraction1.display()