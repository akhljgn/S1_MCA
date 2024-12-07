#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node* CreateNode(int data)
{
    struct node* newNode = (struct node*)malloc(sizeof (struct node));
    newNode->data = data;
    newNode-> left = newNode->right = NULL;
    return newNode;
}

struct node* insert(struct node* root, int data)
{
    if(root == NULL)
        return CreateNode(data);
    if(data < root->data)
        root->left = insert(root->left, data);
    else if(data > root->data)
        root->right = insert(root->right, data); 

    return root;
}

struct node* find(struct node* root, int data)
{
    if(root == NULL || root-> data == data)
        return root; 
    if(data < root->data)
        return find(root->left, data);
    else
        return find(root->right, data);
}

struct node* findMin(struct node* root)
{
    while(root->left != NULL)
    {
        root = root->left;
    }
    return root;
}

struct node* delete(struct node *root, int data)
{
    struct node *temp = findMin(root->right);
    if (root == NULL)
        return root;
    
    if(data < root->data)
        root->left = delete(root->left, data);
    else if(data > root->data)
        root->right = delete(root->right, data);
    else
        if(root->left == NULL)
        {
            struct node *temp = root->right;
            free(root);
            return temp;
        }
}

struct node* preorder(struct node *root)
{
    if(root != NULL)
    {
        printf("%d\t", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

struct node* inorder(struct node *root)
{
    if(root != NULL)
    {
        inorder(root->left);
        printf("%d\t", root->data);
        inorder(root->right);
    }
}

struct node* postorder(struct node *root)
{
    if(root != NULL)
    {
        postorder(root->left);
        postorder(root->right);
        printf("%d\t",root->data);
    }
}

int main()
{
    struct node* root = NULL;
    int choice, value;
    
    while(1)
    {
        printf("\nBinary tree operations:\n1.Insert\n2.Delete\n3.Find\n4.Inorder\n5.Preorder\n6.Postorder\n7.Exit\n");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1: printf("Enter value to insert: ");
            scanf("%d", &value);
            root = insert(root, value);
            printf("Value %d inserted\n", value);
            break;

            case 2: printf("Enter the value to be deleted: ");
            scanf("%d", &value);
            root = delete(root, value);
            printf("Value %d is deleted\n",value);
            break;

            case 3: printf("Enter the value to find: ");
            scanf("%d",&value);
            if (find(root,value))
                printf("Value %d found in the tree",value);
            else
                printf("Value %d not found in the tree", value);
            break;

            case 4: printf("\nInorder traversal");
            inorder(root);
            printf("\n");
            break;

            case 5: printf("\nPreorder traversal");
            preorder(root);
            printf("\n");
            break;

            case 6: printf("\nPostorder traversal\n");
            postorder(root);
            printf("\n");
            break;

            case 7:free(root);
            exit(0);

            default: printf("Enter a valid value");
        }
    }
}