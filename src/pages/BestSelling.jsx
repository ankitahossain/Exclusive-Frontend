import Heading from "../../../commonComponents/Heading";
import ProductCard from "../../../commonComponents/ProductCard";

const BestSelling = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">

        {/* Top */}
        <div className="flex justify-between items-end mb-14">
          <Heading
            title="This Month"
            description="Best Selling Products"
          />

          <button className="px-12 py-4 bg-secondary-color text-white rounded font-medium hover:bg-red-600 transition">
            View All
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-4 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>
    </section>
  );
};

export default BestSelling;