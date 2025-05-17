//Stack linked list implementation
#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node*next;
};

struct node*top = NULL;
struct node*temp,*new;
int x,i;

void push();
void pop();
void display();
void main()
{
    while(1)
    {
        int ch;
        printf("Stack operations\n.............\n");
        printf("1.push\n2.pop\n3.display\n4.Exit\n");
        printf("Enter your choise: \n");
        scanf("%d",&ch);
        switch(ch)
        {
            case 1: push();
                    break;
            case 2: pop();
                    break;
            case 3: display();
                    break;
            case 4: exit(0);
            default: printf("Invalid option \n");
        }
    }
}
void push()
{
    printf("Enter the value to push: \n");
    scanf("%d",&x);
    new = (struct node*)malloc(sizeof(struct node));
    new->data = x;
    new->next = top;
    top = new;
    printf("%d is pushed\n",x);
}
void pop()
{
    if(top==NULL)
    {
        printf("stack Underflow\n");
    }
    else
    {
        temp = top;
        top = top->next;
        printf("%d is poped\n",temp->data);
    }
    
}
void display()
{
    if(top==NULL)
    {
        printf("Stack is empty\n");
    }
    else
    {
        for(temp = top;temp != NULL;temp=temp->next)
        {
            printf("%d->",temp->data);
        }
        printf("NULL\n");
    }
}