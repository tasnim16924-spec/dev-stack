function TechnologyCard({ technology, onAdd}) {
    return(
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between mb-4">

<img src={technology.icon}
alt={technology.name}
className="w-14 h-14 object-contain bg-gray-50 rounded-lg p-2"
/>
<span className="text-5xlfont-semibold bg-amber-200 text-5xl">{technology.badge}</span>
</div>
<h2>{technology.name}</h2>
<p>{technology.description}</p>
<span>{technology.category}</span>
<p>Difficulty: {technology.difficulty}</p>
<p>⭐️ {technology.rating}</p>
<button onClick={() => onAdd (technology)}>Add to Stack </button>


        </div>
    )
}
export default TechnologyCard;