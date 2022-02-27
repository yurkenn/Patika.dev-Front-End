[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

1) Diziyi en ufak parçaya ulaşıncaya kadar böler
2)Böldüğü en ufak parçaları tekrar eski haline birleştirir ancak bu sefer sıralayarak birleştirir
3) Big-0 gösterimi Θ(n log(n))

  [16,21,11]       [8,12,22]
 [16] [21,11]     [8] [12,22]
 [16] [21] [11]   [8] [12] [22]
 [16] [11,21]     [8] [12,22]

 [11,16,21]        [8,12,22]

 [8,11,12,16,21,22]