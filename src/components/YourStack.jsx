function YourStack({stack, onRemove, onRemoveAll}){
return(
<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between border-b pb-4">



<h2 className="text-xl font-bold text-gray-800">Your Stack</h2>
<p className="flex items-center justify-between border-b pb-4">{stack.length} Technology Selected</p>
</div>
{stack.length === 0 ? (
    <p className="text-gray-400 text-sm"> No technologies added yet. </p>
) : (
    <div>

{stack.map(item => (
    <div key={item.id}>

        <img
        src={item.icon}
alt={item.name}
/>
<div>
<h3>{item.name} </h3>
<p>{item.category} </p>
</div>
<button onClick={() => onRemove(item.id)}>
˟
</button>
</div>

))}
<button onClick={onRemoveAll}>
    Remove All
</button>

    </div>
)}


</div>
)
}
export default YourStack







