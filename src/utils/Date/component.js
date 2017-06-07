export const isStoredDataUpToDate = (updatedAt) => {
    console.log("isStoredDataUpToDate updatedAt:")
    console.log(updatedAt)

    if (!updatedAt) return false

    const updatedAtDate = new Date(updatedAt)
    const currentDate = new Date()
    const tomorrowDate = new Date(currentDate.getDate() + 1)

    console.log("This data is up to date: " + (updatedAtDate > tomorrowDate))

    return (updatedAtDate > tomorrowDate)
}
