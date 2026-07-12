function Reviews() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Reviews
      </h2>

      <div className="space-y-4">

        <div className="border-b pb-3">
          <p className="font-medium">
            ⭐⭐⭐⭐⭐
          </p>

          <p className="text-gray-600">
            Excellent cleaning service.
          </p>
        </div>

        <div>
          <p className="font-medium">
            ⭐⭐⭐⭐☆
          </p>

          <p className="text-gray-600">
            Very professional and punctual.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Reviews;