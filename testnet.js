function Block(letter, rate, used, father, code)
{
this.letter = letter;
this.rate = rate;
this.used = used;
this.father = father;
this.code = code;
}
funcion FindCode(block)
{
  if (tree[block.father].code != * *) 
  {
      block.code = '0';
    }
  else
     {
       if (block.letter == tree[minIndex].letter 
       {
         block.code = '0';
        }
         else if (block.letter == tree[priminIndex].letter)
         {
           block.code = '1';
          }
          else
          {
          Find.Code(tree[block.father]);
          block.code = tree[block.father].code + '0';
          }
     }
  }
