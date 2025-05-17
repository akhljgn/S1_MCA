// kruskal
#include <stdio.h>
#include <stdlib.h>

int i, j, a, b, u, v, ne = 1, n = 5; // Set n to the number of vertices
int parent[25], cost[5][5] = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}}, min, mincost = 0;

int find(int i) {
    while (parent[i])
        i = parent[i];
    return i;
}

int uni(int i, int j) {
    if (i != j) {
        parent[j] = i;
        return 1;
    }
    return 0;
}

int main() {

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (cost[i][j] == 0 && i != j) {
                cost[i][j] = 999;
            }
        }
    }

    printf("Edges of the minimum cost spanning tree are:\n");
    while (ne < n) {
        min = 999;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j];
                    a = u = i;
                    b = v = j;
                }
            }
        }
        u = find(a);
        v = find(b);
        if (uni(u, v)) {
            printf("%d edge (%d,%d) = %d\n", ne++, a, b, min);
            mincost += min;
        }
        cost[a][b] = cost[b][a] = 999; // Mark the edge as processed
    }
    printf("\nMinimum cost is %d\n", mincost);

    return 0;
}