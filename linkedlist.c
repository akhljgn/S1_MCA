#include<stdio.h>
#include<stdlib.h>

int count=0;  // global count of nodes
struct node {
    int data;
    struct node *next;
};

struct node *start = NULL;  // start of the linked list

// Function declarations
void create();
void insert_begin();
void insert_end();
void insert_pos();
void delete_begin();
void delete_end();
void delete_pos();
void search();
void display();

int main() {
    int choice;
    while (1) {
        printf("\n1. Creation\n2. Insert beginning\n3. Insert end\n4. Insert position\n5. Delete beginning\n6. Delete end\n7. Delete position\n8. Search\n9. Display\n10. Exit\n");
        printf("\nEnter your choice: ");
        scanf("%d", &choice);
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
                search();
                break;
            case 9:
                display();
                break;
            case 10:
                exit(0);
            default:
                printf("\nInvalid choice");
        }
    }
    return 0;  // should have a return statement
}

// Function to create a linked list
void create() {
    int n, item, i = 0;
    struct node *ptr, *temp;
    if (count == 0) {
        printf("\nEnter the number of nodes to be inserted: ");
        scanf("%d", &n);
        if (n == 0) {
            printf("\nNo creation");
            return;
        } else {
            while (i < n) {
                printf("\nEnter value to insert: ");
                scanf("%d", &item);
                ptr = (struct node*)malloc(sizeof(struct node));
                ptr->data = item;
                ptr->next = NULL;
                if (count == 0) {
                    start = ptr;
                    temp = start;
                } else {
                    temp->next = ptr;
                    temp = temp->next;
                }
                count++;
                i++;
            }
        }
    } else {
        printf("\nList already created\n");
    }
}

// Function to insert at the beginning
void insert_begin() {
    int data;
    struct node *ptr;
    printf("\nEnter value to insert: ");
    scanf("%d", &data);
    ptr = (struct node*)malloc(sizeof(struct node));
    ptr->data = data;
    ptr->next = start;
    start = ptr;
}

// Function to insert at the end
void insert_end() {
    struct node *ptr, *temp;
    int item;
    ptr = (struct node*)malloc(sizeof(struct node));
    printf("\nEnter value: ");
    scanf("%d", &item);
    ptr->data = item;
    ptr->next = NULL;
    if (start == NULL) {
        start = ptr;
    } else {
        temp = start;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = ptr;
    }
    printf("\nNode inserted successfully");
}

// Function to insert at a specific position
void insert_pos() {
    int item, pos, i;
    struct node *ptr, *temp;
    ptr = (struct node*)malloc(sizeof(struct node));
    printf("\nEnter value: ");
    scanf("%d", &item);
    ptr->data = item;
    printf("\nEnter position: ");
    scanf("%d", &pos);
    if (pos == 1) {
        ptr->next = start;
        start = ptr;
    } else {
        temp = start;
        for (i = 1; i < pos - 1; i++) {
            temp = temp->next;
            if (temp == NULL) {
                printf("\nInsertion not possible");
                free(ptr);  // Avoid memory leak
                return;
            }
        }
        ptr->next = temp->next;
        temp->next = ptr;
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
        start = start->next;
        free(temp);
        printf("\nNode deleted");
    }
}

// Function to delete from the end
void delete_end() {
    struct node *ptr, *temp;
    if (start == NULL) {
        printf("\nList is empty");
    } else if (start->next == NULL) {
        free(start);
        start = NULL;
        printf("\nNode deleted");
    } else {
        temp = start;
        while (temp->next->next != NULL) {
            temp = temp->next;
        }
        ptr = temp->next;
        temp->next = NULL;
        free(ptr);
        printf("\nNode deleted");
    }
}

// Function to delete from a specific position
void delete_pos() {
    struct node *ptr, *temp;
    int pos, i;
    printf("\nEnter position: ");
    scanf("%d", &pos);
    if (start == NULL) {
        printf("\nList is empty");
        return;
    } else if (pos == 1) {
        temp = start;
        start = start->next;
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
        ptr = temp->next;
        temp->next = ptr->next;
        free(ptr);
        printf("\nNode deleted");
    }
}

// Function to search for an element
void search() {
    struct node *ptr;
    int item, count = 0, i = 0;
    ptr = start;
    if (ptr == NULL) {
        printf("\nList is empty");
    } else {
        printf("\nEnter element to be searched: ");
        scanf("%d", &item);
        while (ptr != NULL) {
            if (ptr->data == item) {
                printf("\n%d found at position %d", ptr->data, i + 1);
                count = 1;
                break;
            }
            ptr = ptr->next;
            i++;
        }
        if (count == 0) {
            printf("\nElement not found");
        }
    }
}

// Function to display the linked list
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
