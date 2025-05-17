//Circular queue

#include <stdio.h>
#include <stdlib.h>

int a[5], n = 5, i, rear = -1, front = -1, x;

void enqueue();
void dequeue();
void display();

void main()
{
    int ch;
    while (1)
    {
        printf("Circular Queue Operations\n.......................\n");
        printf("1. Enqueue\n2. Dequeue\n3. Display\n4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            enqueue();
            break;
        case 2:
            dequeue();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
        default:
            printf("Invalid option\n");
        }
    }
}

void enqueue()
{
    printf("Enter the value to enqueue: ");
    scanf("%d", &x);
    if ((front == 0 && rear == n - 1) || (rear + 1 == front))
    {
        printf("Queue is overflow\n");
        return;
    }
    if (rear == -1) // First element
        rear = front = 0;
    else if (rear == n - 1) // Wrap around
        rear = 0;
    else
        rear = rear + 1;
    a[rear] = x;
    printf("Element %d is enqueued\n", x);
}

void dequeue()
{
    if (front == -1)
    {
        printf("Queue is underflow\n");
        return;
    }
    printf("Element %d is dequeued\n", a[front]);
    if (front == rear) // Single element
        front = rear = -1;
    else if (front == n - 1) // Wrap around
        front = 0;
    else
        front = front + 1;
}

void display()
{
    if (front == -1)
    {
        printf("Queue is empty\n");
        return;
    }
    printf("Queue elements are: ");
    if (front > rear)
    {
        for (i = front; i < n; i++)
            printf("%d ", a[i]);
        for (i = 0; i <= rear; i++)
            printf("%d ", a[i]);
    }
    else
    {
        for (i = front; i <= rear; i++)
            printf("%d ", a[i]);
    }
    printf("\n");
}