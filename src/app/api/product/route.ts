import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "NIKE AIR MAX 90",
    price: 23000000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99fd5856-b6ac-47c9-8cf0-99192fe4b844/NIKE+C1TY.png"
  },
  {
    id: 2,
    title: "NIKE SKATEBOARD",
    price: 1100000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/712d7d2e-2ce5-4c62-83af-c9f3a73c8ad2/NIKE+ZOOM+VOMERO+5.png"
  },
  {
    id: 3,
    title: "NIKE LIGHTWEIGHT",
    price: 1500000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e5cc9ab3-5c10-43fa-b007-5bb4fcfc07d9/NIKE+FREE+METCON+6.png"
  },
  {
    id: 4,
    title: "NIKE SYNTHETIC",
    price: 1800000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png"
  },
  {
    id: 5,
    title: "NIKE SYNTHETIC",
    price: 1800000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png"
  },
];
export async function GET(request: NextRequest) {
  // console.log( request)
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(id);
  if (id) {
    const DetailProduct = data.find((item) => item.id === Number(id));
    if(DetailProduct){
        return NextResponse.json({
            status: 200,
            message: "success",
            data: DetailProduct,
          });
    }
    return NextResponse.json({
        status: 404,
        message: "not found",
        data: {},
      });
  }
  return NextResponse.json({ status: 200, message: "success", data: data });
}
