#include <conio.h>
#include <stdlib.h>
#include <stdio.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

int i, parent;
struct node *root = NULL;
struct node *newnode, *temp[20];

void preorder(struct node *root)
{
    if (root != NULL)
    {
        printf("%d\t", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}
void inOrder(struct node *root)
{
    if (root != NULL)
    {
        inOrder(root->left);
        printf("%d ", root->data);
        inOrder(root->right);
    }
}
void postOrder(struct node *root)
{
    if (root != NULL)
    {
        postOrder(root->left);
        postOrder(root->right);
        printf("%d ", root->data);
    }
}

void add(int num)
{
    int item;

    for (i = 0; i < num; i++)
    {
        printf("Enter the number");
        scanf("%d", &item);
        newnode = (struct node *)malloc(sizeof(struct node));
        newnode->left = newnode->right = NULL;
        newnode->data = item;
        printf("Inserted\n");
        temp[i] = newnode;
        if (i == 0)
        {
            root = newnode;
            continue;
        }
        parent = (i - 1) / 2;

        if (i % 2 == 0)
            temp[parent]->right = newnode;

        else
            temp[parent]->left = newnode;
    }
}
void deleteNode(int key)
{
    if (root == NULL)
    {
        printf("Tree is empty.\n");
        return;
    }

    struct node *keyNode = NULL, *parentNode = NULL;

    // Traverse the tree to find the key node and its parent
    for (int j = 0; j < i; j++)
    {
        if (temp[j]->data == key)
        {
            keyNode = temp[j];              // Node to delete
            parentNode = temp[(j - 1) / 2]; // Parent of the node
            break;
        }
    }

    if (keyNode == NULL)
    {
        printf("Key not found.\n");
        return;
    }

    // Remove the key node
    if (keyNode == root) // If root is being deleted
    {
        root = NULL;
        printf("Root node deleted successfully.\n");
    }
    else
    {
        // Check if the key node is the left or right child of its parent
        if (parentNode->left == keyNode)
            parentNode->left = NULL;
        else
            parentNode->right = NULL;

        printf("Node deleted successfully.\n");
    }

    free(keyNode);
    i--; // Update the count of nodes
}

int main()
{
    int num, choice, key;
    printf("enter a binary number (Max 20):");
    scanf("%d", &num);
    while (1)
    {
        printf("\n1. Insert\n2. Pre-order Traversal\n3. In-order Traversal\n4. Post-order Traversal\n5. Delete\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            add(num);
            break;
        case 2:
            preorder(root);
            break;
        case 3:
            inOrder(root);
            break;
        case 4:
            postOrder(root);
            break;
        case 5:
            printf("Enter the value to delete: ");
            scanf("%d", &key);
            deleteNode(key);
            break;
        case 6:
            exit(0);
        }
    }
}