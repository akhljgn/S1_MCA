//prims matrix initialized in the code 
#include<stdio.h>

int a, b, u, v, n, i, j, ne = 1;
int visited[10] = {0}, min, mincost = 0;
int cost[10][10] = {
    {0, 2, 0, 6, 0},
    {2, 0, 3, 8, 5},
    {0, 3, 0, 0, 7},
    {6, 8, 0, 0, 9},
    {0, 5, 7, 9, 0}
};

void main()
{
    n = 5; 
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (cost[i][j] == 0 && i != j)
                cost[i][j] = 999;
        }
    }

    visited[0] = 1; 
    printf("\nEdges in the Minimum Spanning Tree are:\n");

    while (ne < n) 
    {
        min = 999; 

        for (i = 0; i < n; i++)
        {
            if (visited[i]) 
            {
                for (j = 0; j < n; j++)
                {
                    if (!visited[j] && cost[i][j] < min)
                    {
                        min = cost[i][j];
                        a = u = i;
                        b = v = j;
                    }
                }
            }
        }

        if (!visited[u] || !visited[v])
        {
            printf("Edge %d: (%d, %d) cost: %d\n", ne++, a + 1, b + 1, min);
            mincost += min;
            visited[b] = 1; // Mark the newly visited node
        }
        cost[a][b] = cost[b][a] = 999; // Mark edge as used
    }

    printf("\nMinimum cost = %d\n", mincost);
}