#include <stdio.h>

int main()
{
    int rows = 5;
    for(int i = 0; i < rows; i++){
        for (int j = i + 1; j <= rows; j++){
            printf("%d", j);
        }
        printf("\n");
    }
    printf("=====block_1=====\n");
    int i, j;
    for(i = 5; i >= 1; i--){
        for (j = 1; j <= i; j++)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    printf("=====block_2=====\n");
    int a, b;
    for (a = 5; a >= 1; a--){
        for (b = a; b >= 1; b--){
            printf("%d", b);
        }
        printf("\n");
    }
    printf("=====block_3=====\n");
    int c, d;
    for (c = 1; c <= 5; c++){
        for (d = 1; d <= c; d++){
            printf("%d", d);
        }
        printf("\n");
    }
    printf("=====block_4=====\n");
    printf("1\n");
    printf("%d\n",22);
    printf("%d\n",333);
    printf("%d\n",4444);
    printf("%d\n",55555);
    printf("=====block_5=====\n");
    printf("5\n");
    printf("%d\n",44);
    printf("%d\n",333);
    printf("%d\n",2222);
    printf("%d\n",11111);
    printf("=====block_6=====\n");
    printf("%d\n",12345);
    printf("%d\n",2345);
    printf("%d\n",345);
    printf("%d\n",45);
    printf("%d\n",5);
    printf("=====block_7=====\n");
    printf("%d\n",5);
    printf("%d\n",54);
    printf("%d\n",543);
    printf("%d\n",5432);
    printf("%d\n",54321);
    printf("=====block_8=====\n");
    printf("%d\n",11111);
    printf("%d\n",2222);
    printf("%d\n",333);
    printf("%d\n",44);
    printf("%d\n",5);
    printf("=====block_9=====\n");
    printf("%d\n",55555);
    printf("%d\n",4444);
    printf("%d\n",333);
    printf("%d\n",22);
    printf("%d\n",1);
    printf("=====block_10=====\n");
    printf("%d\n",54321);
    printf("%d\n",5432);
    printf("%d\n",543);
    printf("%d\n",54);
    printf("%d\n",5);
    return 0;
}
