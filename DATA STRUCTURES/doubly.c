#include <stdio.h>
#include <stdlib.h>

int count = 0; // Keeps track of the number of nodes in the list

// Definition of the node structure
struct node {
    int data; // Holds the data value
    struct node *next; // Pointer to the next node in the list
    struct node *prev; // Pointer to the previous node in the list
};

struct node *start = NULL; // Pointer to the start of the doubly linked list

// Declarations of functions used later in the code
void create();
void insert_begin();
void insert_end();
void insert_pos();
void delete_begin();
void delete_end();
void delete_pos();
void display();

int n, item, i = 0, data, pos;

int main() {
    int choice; // Variable to store the user's menu choice
    // Displaying the menu to the user
    printf("\n1. Creation\n2. Insert beginning\n3. Insert end\n4. Insert position\n5. Delete beginning\n6. Delete end\n7. Delete position\n8. Display\n9. Exit\n");
    while (1) { // Infinite loop for continuous menu display
        printf("\nEnter your choice: ");
        scanf("%d", &choice); // Reading the user's choice
        // Switch case to handle different user choices
        switch (choice) {
            case 1:
                create();
                break;
            case 2:
                insert_begin();
                break;
            case 3:
                insert_end();
                break;
            case 4:
                insert_pos();
                break;
            case 5:
                delete_begin();
                break;
            case 6:
                delete_end();
                break;
            case 7:
                delete_pos();
                break;
            case 8:
                display();
                break;
            case 9:
                exit(0); // Exiting the program
            default:
                printf("\nInvalid choice"); // Handling invalid choices
        }
    }
    return 0; // Returning 0 to indicate successful program termination
}

// Function to create a doubly linked list
void create() {
    // int n, item, i = 0;
    struct node *ptr, *temp;
    if (count == 0) { // Check if the list is not already created
        printf("\nEnter the number of nodes to be inserted: ");
        scanf("%d", &n); // Reading number of nodes to insert
        if (n == 0) {
            printf("\nNo creation");
            return;
        } else {
            while (i < n) {
                printf("\nEnter value to insert: ");
                scanf("%d", &item); // Reading data to insert into the node
                ptr = (struct node*)malloc(sizeof(struct node)); // Allocating memory for the node
                ptr->data = item; // Assigning data
                ptr->next = NULL; // Setting next to NULL
                ptr->prev = NULL; // Setting prev to NULL

                if (count == 0) {
                    start = ptr; // If first node, set start to point to the node
                } else {
                    temp = start; // Temp starts at the beginning of the list
                    while (temp->next != NULL) { // Traverse to the last node
                        temp = temp->next;
                    }
                    temp->next = ptr; // Link the last node to the new node
                    ptr->prev = temp; // Link new node's previous pointer to the last node
                }
                count++; // Increment node count
                i++;
            }
            printf("\nList created");
        }
    } else {
        printf("\nList already created\n");
    }
}

// Function to insert at the beginning
void insert_begin() {
    // int data;
    struct node *ptr;
    printf("\nEnter value to insert: ");
    scanf("%d", &data); // Reading data to insert
    ptr = (struct node*)malloc(sizeof(struct node)); // Allocating memory
    ptr->data = data; // Assigning data
    ptr->next = start; // Pointing new node to the current start node
    ptr->prev = NULL; // The new node is the first node, so prev is NULL
    if (start != NULL) {
        start->prev = ptr; // Link previous start node back to the new node
    }
    start = ptr; // Updating start to the new node
    printf("\nNew node added at the beginning");
}

// Function to insert at the end
void insert_end() {
    struct node *ptr, *temp;
    // int item;
    ptr = (struct node*)malloc(sizeof(struct node)); // Allocating memory
    printf("\nEnter value: ");
    scanf("%d", &item); // Reading data to insert
    ptr->data = item; // Assigning data
    ptr->next = NULL; // Setting next to NULL as it will be the last node
    ptr->prev = NULL; // Will be updated later

    if (start == NULL) {
        start = ptr; // If list is empty, set start to the new node
    } else {
        temp = start; // Temp starts at the beginning of the list
        while (temp->next != NULL) { // Traverse to the last node
            temp = temp->next;
        }
        temp->next = ptr; // Point the last node to the new node
        ptr->prev = temp; // Link new node's previous pointer to the last node
    }
    printf("\nNode inserted successfully");
}

// Function to insert at a specific position
void insert_pos() {
    // int item, pos, i;
    struct node *ptr, *temp;
    ptr = (struct node*)malloc(sizeof(struct node)); // Allocating memory
    printf("\nEnter value: ");
    scanf("%d", &item); // Reading data to insert
    ptr->data = item; // Assigning data
    printf("\nEnter position: ");
    scanf("%d", &pos); // Reading position

    if (pos == 1) {
        ptr->next = start; // If position is 1, insert at the beginning
        ptr->prev = NULL; // New node's previous is NULL
        if (start != NULL) {
            start->prev = ptr; // Link the current start back to the new node
        }
        start = ptr; // Update start to the new node
    } else {
        temp = start;
        for (i = 1; i < pos - 1; i++) { // Traverse to the node before the position
            temp = temp->next;
            if (temp == NULL) {
                printf("\nInsertion not possible");
                free(ptr); // Free allocated memory if insertion is not possible
                return;
            }
        }
        ptr->next = temp->next; // Link new node to the next node
        if (temp->next != NULL) {
            temp->next->prev = ptr; // Link next node back to new node
        }
        temp->next = ptr; // Link previous node to the new node
        ptr->prev = temp; // Link new node's previous pointer to the previous node
    }
    printf("\nNode inserted\n");
}

// Function to delete from the beginning
void delete_begin() {
    struct node *temp;
    if (start == NULL) {
        printf("\nList is empty");
    } else {
        temp = start;
        start = start->next; // Point start to the next node
        if (start != NULL) {
            start->prev = NULL; // Update the previous pointer of new start
        }
        free(temp); // Free the first node
        printf("\nNode deleted");
    }
}

// Function to delete from the end
void delete_end() {
    struct node *ptr, *temp;
    if (start == NULL) {
        printf("\nList is empty");
    } else if (start->next == NULL) { // If only one node
        free(start); // Free the node
        start = NULL; // Set start to NULL
        printf("\nNode deleted");
    } else {
        temp = start;
        while (temp->next != NULL) { // Traverse to the last node
            temp = temp->next;
        }
        ptr = temp; // Last node
        temp = temp->prev; // Second last node
        temp->next = NULL; // Set next of second last node to NULL
        free(ptr); // Free the last node
        printf("\nNode deleted");
    }
}

// Function to delete from a specific position
void delete_pos() {
    struct node *ptr, *temp;
    // int pos, i;
    printf("\nEnter position: ");
    scanf("%d", &pos);
    if (start == NULL) {
        printf("\nList is empty");
        return;
    } else if (pos == 1) {
        temp = start;
        start = start->next;
        if (start != NULL) {
            start->prev = NULL; // Update the previous pointer of new start
        }
        free(temp);
        printf("\nNode deleted");
    } else {
        temp = start;
        for (i = 1; i < pos - 1; i++) {
            temp = temp->next;
            if (temp == NULL || temp->next == NULL) {
                printf("\nDeletion not possible");
                return;
            }
        }
        ptr = temp->next; // Node to be deleted
        temp->next = ptr->next; // Link previous node to the next node
        if (ptr->next != NULL) {
            ptr->next->prev = temp; // Link next node back to the previous node
        }
        free(ptr);
        printf("\nNode deleted");
    }
}

// Function to display the doubly linked list
void display() {
    struct node *ptr;
    ptr = start;
    if (ptr == NULL) {
        printf("\nList is empty");
    } else {
        printf("\nList: ");
        while (ptr != NULL) {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
    }
}