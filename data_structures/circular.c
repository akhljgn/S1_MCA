//program to do operations using circular queue
#include<stdio.h>
#include<stdlib.h>

int a[10],front=-1,rear=-1,n;

void insert();
void delete();
void display();

//main function
void main() 
{
    int ch;
    printf("Enter the size of the queue : ");
    scanf("%d",&n);
    while(1) 
	{
		printf("\n\n1:Insertion");
		printf("\n2:Deletion");
		printf("\n3:Display");
		printf("\n4:Exit");
		printf("\nEnter your choice : ");
		scanf("%d",&ch);
		switch(ch) 
		{
			case 1:insert();
			break;
			case 2:delete();
			break;
			case 3:display();
			break;
			case 4:exit(0);
			default:printf("\nInvalid choice");
		}
    }
}

//to perform insertion operations in circular queue
void insert() 
{
    int x;
    if((front==0 && rear==n-1)||(front==rear+1)) 
	{
		printf("Queue is full");
    }
    else 
	{
		printf("Enter the element to insert : ");
		scanf("%d",&x);
		if(front==-1 && rear==-1)
			front=rear=0;
		else if(rear==n-1 && front!=0)
			rear=0;
		else
			rear=(rear+1)%n;
		a[rear]=x;
    }
}

//to display the content in circular queue
void display() 
{
    int i;
    printf("Front = %d\nRear = %d\n",front,rear);
    if(front==-1)
	    printf("\nQueue is empty");
    else if(front<=rear) {
		for(i=front;i<=rear;i++)
			printf("%d ",a[i]);
    }
    else 
	{
		for(i=front;i<n;i++)
			printf("%d ",a[i]);
		for(i=0;i<=rear;i++)
			printf("%d",a[i]);
    }
}

//to perform deletion operations in circular queue
void delete()
{
    if(front==-1)
    	printf("\nQueue is empty");
    else 
	{
		printf("Deleted element : %d",a[front]);
		if(front==rear)
			front=rear=-1;
		else 
		{
	    	if(front==n-1)
	    		front=0;
	    	else
	    		front+=1;
		}
    }
}