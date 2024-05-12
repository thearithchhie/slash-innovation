# Example 1

![photo_2022-10-06_21-43-21](https://github.com/thearithchhie/slash-innovation/assets/67414669/0297b353-2e42-4ecc-8a50-f686e922914b)
```
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

```
# Example 2
![photo_2022-10-06_21-38-53](https://github.com/thearithchhie/slash-innovation/assets/67414669/92280f89-ca2a-4480-a0ca-041174247abb)
```
#include <stdio.h>

int main()
{
    printf("=====block_1=====\n");
    printf("%d\n",1);
    printf("%d\n",12);
    printf("%d\n",123);
    printf("%d\n",1234);
    printf("%d\n",12345);
    printf("%d\n",123456);
    printf("%d\n",1234567);
    printf("%d\n",12345678);
    printf("%d\n",123456789);
    printf("=====block_2=====\n");
    printf("%d\n",1); 
    printf("%d\n",12); 
    printf("%d\n",123); 
    printf("%d\n",1234); 
    printf("%d\n",12345); 
    printf("%d\n",123456);
    printf("=====block_3=====\n");
    printf("%s\n","     11");
    printf("%s\n","    1212");
    printf("%s\n","   123123");
    printf("%s\n","  12341234");
    printf("%s\n"," 1234512345");
    printf("%s\n","123456123456");
    printf("%s\n"," 1234512345");
    printf("%s\n","  12341234");
    printf("%s\n","   123123");
    printf("%s\n","    1212");
    printf("%s\n","     11");
    printf("=====block_4=====\n");
    printf("%s\n","         11");
    printf("%s\n","        1010");
    printf("%s\n","      10101010");
    printf("%s\n","    101010101010");
    printf("%s\n","   10101010101010");
    printf("%s\n"," 101010101010101010");
    printf("%s\n","10101010101010101010");
    printf("=====block_5=====\n");
    printf("%d\n",55555);
    printf("%d\n",4444);
    printf("%d\n",333);
    printf("%d\n",11);
    printf("%d\n",1);
    return 0;
}

```
# Display all month of a year
![photo_2023-01-05_10-49-42](https://github.com/thearithchhie/slash-innovation/assets/67414669/840a1835-e627-4dec-84e7-4029951b1652)

```

#include <stdio.h>

int main()
{
    char jan[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
    1   2   3   4   5   6   7\n\
    8   9   10  11  12  13  14\n\
    15  16  17  18  19  20  21\n\
    22  23  24  25  26  27  28\n\
    29  30";
    
    char feb[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                1   2   3   4\n\
    5   6   7   8   9   10  11\n\
    12  13  14  15  16  17  18\n\
    19  20  21  22  23  24  25\n\
    26  27  28";
    
    char march[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                1   2   3   4\n\
    5   6   7   8   9   10  11\n\
    12  13  14  15  16  17  18\n\
    19  20  21  22  23  24  25\n\
    26  27  28  29  30  31 ";
    
    char april[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                            1\n\
    2   3   4   5   6   7   8\n\
    9   10  11  12  13  14  15\n\
    16  17  18  19  20  21  22\n\
    23  24  25  26  27  28  29\n\
    30 ";
    
    char may[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
        1   2   3   4   5   6\n\
    7   8   9   10  11  12  13\n\
    14  15  16  17  18  19  20\n\
    21  22  23  24  25  26  27\n\
    28  29  30  31";
    
    char june[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                    1   2   3\n\
    4   5   6   7   8   9   10\n\
    11  12  13  14  15  16  17\n\
    18  19  20  21  22  23  24\n\
    25  26  27  28  29  30";
    
    char july[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                            1\n\
    2   3   4   5   6   7   8\n\
    9   10  11  12  13  14  15\n\
    16  17  18  19  20  21  22\n\
    23  24  25  26  27  28  29\n\
    30  31";
    
    char august[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
            1   2   3   4   5\n\
    6   7   8   9   10  11  12\n\
    13  14  15  16  17  18  19\n\
    20  21  22  23  24  25  26\n\
    27  28  29  30  31";
    
    char september[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                        1   2\n\
    3   4   5   6   7   8   9\n\
    10  11  12  13  14  15  16\n\
    17  18  19  20  21  22  23\n\
    24  25  26  27  28  29  30";
    
    char october[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
    1   2   3   4   5   6   7\n\
    8   9   10  11  12  13  14\n\
    15  16  17  18  19  20  21\n\
    22  23  24  25  26  27  28\n\
    29  30  31";
    
    
    char november[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                1   2   3   4\n\
    5   6   7   8   9   10  11\n\
    12  13  14  15  16  17  18\n\
    19  20  21  22  23  24  25\n\
    26  27  28  29  30";
    
     char december[] = "\
    Su  Mo  Tu  We  Th  Fr  Sa\n\
                        1   2\n\
    3   4   5   6   7   8   9\n\
    10  11  12  13  14  15  16\n\
    17  18  19  20  21  22  23\n\
    24  25  26  27  28  29  30";
    
    printf("================January================\n");
        printf("%s\n",jan);
    printf("================February================\n");
        printf("%s\n",feb);
    printf("================March================\n");
        printf("%s\n",march);
    printf("===============April=================\n");
        printf("%s\n",april);
    printf("===============May=================\n");
        printf("%s\n",may);
    printf("===============June=================\n");
        printf("%s\n",june);
    printf("===============July=================\n");
        printf("%s\n",july);
    printf("===============August=================\n");
        printf("%s\n",august);
    printf("===============September=================\n");
        printf("%s\n",september);
    printf("===============October=================\n");
        printf("%s\n",october);
    printf("===============November=================\n");
        printf("%s\n",november);
    printf("===============December=================\n");
        printf("%s\n",december);

    return 0;
}

```
# Fish
```
#include <stdio.h>

int main()
{
    char frish[] = 
        "                               aaaaaaaaaaaaa\n"
        "                          aaaaaaaaaaaaaaaaaaaaaaaaa\n"
        "                           aaaaaaaaaaaaaaaaaaaaaaaa\n"
        "                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n"
        "                   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                                     aa\n"
        "                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                                aaaaa\n"
        "              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                           aaaaaaa\n"
        "           aaaaaaaaa     aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                      aaaaaaaaaa\n"
        "         aaaaaaaaaaa     aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                 aaaaaaaaaaaa\n"
        "       aaaaaaaaaaaaa     aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa             aaaaaaaaaaaaaa\n"
        "     aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa         aaaaaaaaaaaaaaaa\n"
        "   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa    aaaaaaaaaaaaaaaaaaa\n"
        "               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n"
        "   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa    aaaaaaaaaaaaaaaaaaa\n"
        "     aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa         aaaaaaaaaaaaaaaa\n"
        "       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa             aaaaaaaaaaaaaa\n"
        "         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                 aaaaaaaaaaaa\n"
        "           aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                      aaaaaaaaaa\n"
        "              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                           aaaaaaa\n"
        "                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                                aaaaa\n"
        "                   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                                     aa\n"
        "                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n"
        "                           aaaaaaaaaaaaaaaaaaaaaaaa\n"
        "                                aaaaaaaaaaaaa\n";

    printf("%s", frish);
    return 0;
}
```
