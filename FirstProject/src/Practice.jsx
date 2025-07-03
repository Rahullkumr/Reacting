export function Card({emoji, name, city, mob}) {
  return(    
    <div className="bg-blue-950 h-[450px] w-[350px]">
      <div className="flex justify-center items-center bg-yellow-800 h-[35%]">
        <div className="bg-white border rounded-full h-30 w-30 text-8xl flex justify-center items-center">
          {emoji}
        </div>
      </div>
      <div className="mt-10 text-white text-3xl">
        <div className="flex justify-between p-3 border-2 m-3">
          <div>Name </div>
          <div>{name}</div>
        </div>
        <div className="flex justify-between p-3 border-2 m-3">
          <div>City </div>
          <div>{city}</div>
        </div>
        <div className="flex justify-between p-3 border-2 m-3">
          <div>Mobile </div>
          <div>{mob}</div>
        </div>
      </div>
    </div>
  );
}

function Practice() {
  return (
    <div className="flex justify-start gap-3 p-5">
        <Card emoji={'😍'} name={'Rahul Kumar'} city={'Mumbai'} mob={'9798167890'} />
        <Card emoji={'😎'} name={'Manoj Saru'} city={'Mizoram'} mob={'9798167891'} />
        <Card emoji={'🥱'} name={'Gokul Raj'} city={'Bangalore'} mob={'9798167892'} />
    </div>
  );
}
export default Practice;
