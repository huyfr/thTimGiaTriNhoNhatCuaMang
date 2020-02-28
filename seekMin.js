let arr1=[3, 5, 1, 8, -3, 7, 8];
let arr2=[7, 12, 6, 9, 20, 56, 89];
let arr3=[];
let arr4=[0, 0, 0, 0, 0, 0];

function minArray(arr)
{
    let min = arr[0];
    let minIndex;

    if (arr.length===0)
    {
        return -1;
    }
    else
    {
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i]<min)
            {
                minIndex=i;
            }
        }
        return minIndex;
    }
}

if (minArray(arr1)===-1)
{
    alert("Mang rong!");
}
else
{
    let result=arr1[minArray(arr1)];
    document.getElementById("result").innerHTML="Gia tri nho nhat cua mang :" +result;
}

