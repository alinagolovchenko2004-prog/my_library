function AvailabilityBadge({copies}) {
    return (
        <span className={copies > 0 ? "available" : "unavailable"}>
    {copies > 0 ? "Доступна" : "Нет в наличии"}
    </span>
    )
}
export default AvailabilityBadge;