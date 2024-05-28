import { reactive, onMounted }  from 'vue';
import axios from 'axios';

export default function()
{
    // https://dog.ceo/api/breeds/image/random
    let dogList = reactive
    (
        [
            'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_1763.jpg',
        ]
    );

    async function ChangeDog()
    {
        try
        {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random');
            dogList.push(result.data.message);
        }
        catch(error)
        {
            alert(error);
        }
    }

    onMounted(() => 
    {
        ChangeDog();
    })

    return { dogList, ChangeDog };
}