class Time:
    def __init__(self, h = 0, m = 0, s = 0):
        self._h = h
        self._m = m
        self._s = s
        
    def __add__(self, other):
        tot_second = self._s + other._s
        extra_min = tot_second // 60
        sec = tot_second % 60
        tot_min = self._m + other._m
        extra_hr = tot_min // 60
        min = tot_min % 60 + extra_min
        hour = (self._h + other._h + extra_hr) % 24

        return Time(hour, min, sec)
    
    def __str__(self):
        return f"{self._h}:{self._m}:{self._s}"
    
t1 = Time(20, 30, 45)
t2 = Time(18, 5, 30)
print(t1 + t2)