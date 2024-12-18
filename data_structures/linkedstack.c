#include<stdio.h>
#include<stdlib.h>

int count=0, item;

struct node
{
    int data;
    struct node *next;
};

struct node *top=0, *nextnode;

void push()
{
    printf("Enter the item: ");
    nextnode= (struct node*) malloc(sizeof (struct node));
    scanf("%d",&item);
    nextnode->data = item;
    nextnode->next = top;
    top  = nextnode;
}