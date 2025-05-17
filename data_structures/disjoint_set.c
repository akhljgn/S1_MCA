//Disjoint Set operations
#include<stdio.h>
#include<stdlib.h>

int a[100],b[100],c[200],i,n,m,x,count;
void create();
void uni();
void find();

void main()
{   
    int ch;
    while(1)
    {
        printf("Disjointset Operation\n...............\n");
        printf("1.Create\n2.union\n3.find\nExit\n");
        printf("enter tour choice: \n");
        scanf("%d",&ch);
        switch (ch)
        {
        case 1: create();
        break;
        case 2: uni();
        break;
        case 3: find();
        break;
        case 4: exit(0);
        default :printf("Invalid option");
        }
    }

}
void create()
{
    printf("enter the size of SetA");
    scanf("%d",&n);
    printf("enter the element of setA\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("enter the size of SetB");
    scanf("%d",&m);
    printf("enter the element of setA\n");
    for(i=0;i<m;i++)
    {
        scanf("%d",&b[i]);
    }

    printf("Elements in Set A is:\n");
     for(i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }

    printf("Elements in Set b is:\n");
    for(i=0;i<m;i++)
    {
        printf("%d ",b[i]);
    }

}
void uni()
{
    for(i=0;i<n;i++)
    {
        c[i] = a[i];
    }
    for(i=0;i<m;i++)
    {
        c[i+n] = b[i];
    }

    printf("Union set\n");
    for(i=0;i<m+n;i++)
    {
        printf("%d ",c[i]);
    }
}
void find()
{
    printf("enter the elemenrt to find: \n");
    scanf("%d",&x);
    for(i=0;i<n;i++)
    {
        if(a[i]==x)
        {
            printf("%d is Present in Set A\n",x);
        }

    }
    for(i=0;i<m;i++)
    {
        if(b[i]==x)
        {
            printf("%d is Present in Set B\n",x);
            
        }
    }
}