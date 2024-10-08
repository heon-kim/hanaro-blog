import Image from 'next/image';

export default function Products() {
  const cards = Array(6).fill(null);

  return (
    <div className='p-16 flex flex-col gap-12'>
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold text-lg'>Heading</h3>
        <h5 className='text-sm text-gray-500'>Subheading</h5>
      </div>

      <div className='grid grid-cols-3 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12'>
        {cards.map((_, index) => (
          <Card key={index}></Card>
        ))}
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className='flex flex-col gap-6 border border-gray-100 rounded-md p-6'>
      <Image src='/Image.png' width={160} height={160} alt='Thumbnail'></Image>
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold text-lg'>Title</h3>
        <p className='text-gray-500'>
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very very short story.{' '}
        </p>
      </div>
    </div>
  );
}
