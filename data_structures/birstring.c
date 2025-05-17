//bit string operations

#include<stdio.h>
#include<stdlib.h>

int u[]={1,2,3,4,5,6,7,8,9,10},a[]={1,2,3,4},b[]={3,4,5,6,7,8},i,j,n,m;
int ba[10]={0},bb[10]={0};
void bit();
void uni();
void ins();
void diff();

void main()
{
    int ch;
    while(1)
    {
        printf("Set operation \n");
        printf("1.Show Bitstring\n2.union\n3.intersection\n4difference\n5.exit\n");
        printf("Enter your choise: \n");
        scanf("%d",&ch);
        switch(ch)
        {
            case 1 : bit();
                    break;
            case 2 : uni();
                    break;
            case 3 : ins();
                    break;
            case 4 : diff();
                    break;
            case 5 : exit(0);
            default: printf("Invalid choice\n");
        }
    }
}
void bit()
{
    for(i=0;i<10;i++)
    {
        ba[i]=0;
        for(j=0;j<4;j++)
        {
            if(u[i]==a[j])
            {
                ba[i]=1;
            }
        }
    }

    for(i=0;i<10;i++)
    {
        bb[i]=0;
        for(j=0;j<6;j++)
        {
            if(u[i]==b[j])
            {
                bb[i]=1;
            }
        }
    }
    printf("SET A Elements: \n");
    printf("{");
    for(i=0;i<10;i++)
    {
        printf("%d,",ba[i]);
    }
    printf("}");

    printf("SET B Elements: \n");
    printf("{");
    for(i=0;i<10;i++)
    {
        printf("%d,",bb[i]);
    }
    printf("}");

}
void uni()
{
    printf("Union of SetA and SetB: \n");
    printf("{");
    for(i=0;i<10;i++)
    {
        printf("%d,",ba[i] || bb[i]);
    }
    printf("}");
}

void ins()
{
    printf("Intersection Of SetA and SetB \n");
    printf("{");
    for(i=0;i<10;i++)
    {
        print("%d",ba[i]&&bb[i]);
    }
    printf("}");

}

void diff()
{
    printf("Difference of SetA- SetB\n");
    printf("{");
    for(i=0;i<10;i++)
    {
        printf("%d",ba[i]&&!bb[i]);
    }
    printf("}");

    printf("Difference of SetA- SetB\n");
    printf("{");
    for(i=0;i<10;i++)
    {
        printf("%d",ba[i]&&!bb[i]);
    }
    printf("}");
}