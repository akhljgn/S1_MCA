import heapq

# Create an empty list (the heap)
pq = []

# Insert elements with their priority (priority, element)
heapq.heappush(pq, (3, 'task1'))  # priority 3
heapq.heappush(pq, (1, 'task2'))  # priority 1 (highest priority)
heapq.heappush(pq, (2, 'task3'))  # priority 2

# Peek the element with the highest priority (smallest priority number)
#print(pq[0])  # Output: (1, 'task2')
for i in range(0, len(pq)):
    print(pq[i], end=", ")

# Remove and return the element with the highest priority
task = heapq.heappop(pq)
print(task)  # Output: (1, 'task2')

task = heapq.heappop(pq)
print(task)  # Output: (1, 'task2')



# Remaining elements in the priority queue
print(pq)  # Output: [(2, 'task3'), (3, 'task1')]
