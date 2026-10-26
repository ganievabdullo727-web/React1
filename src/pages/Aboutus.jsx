import axios from "axios";
import React, { useEffect, useState } from "react";

let api = "https://to-dos-api.softclub.tj/api/to-dos";
const Aboutus = () => {
  let [data, setData] = useState([]);
  let [editItem, setEditItem] = useState(null);

    async function editUserData(e) {
    e.preventDefault();

    try {
      await axios.put(api, {
        id: editUser.id,
        name: editName,
        description: editUser.description,
      });

      get();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEdit() {
    try {
      await axios.put(api, {
        id: editItem.id,
        name: editItem.name,
        description: editItem.description,
      });
      setEditItem(null);
      get();
    } catch (error) {
      console.log(error);
    }
  }

  async function get() {
    try {
      let { data } = await axios.get(api);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCheck(el) {
    try {
      await axios.put(`https://to-dos-api.softclub.tj/completed?id=${el.id}`);
      get();
    } catch (error) {
      console.log(error);
    }
  }

  async function handeldelete(id) {
    try {
      await axios.delete(`${api}?id=${id}`);
      get();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-around items-center bg-[#FEDAD5]">
        <div className="w-[25%]">
          <h1 className="text-[40px]">
            Enjoy studying with Createx Online Courses
          </h1>
          <div className="mt-[10px]">
            <button className="text-[#F75E05] border border-[#F75E05] p-[10px]">
              About us
            </button>
            <button className="text-[white] border bg-[#F75E05] p-[10px]">
              Explore courses
            </button>
          </div>
        </div>
        <img src="/public/illustration (2).png" alt="" />
      </div>

      <section className="flex justify-around items-center mt-[150px]">
        <img src="/public/image (18).png" className="w-[40%]" alt="" />

        <div className="w-[25%]">
          <h1 className="text-[40px]">Who Createx?</h1>
          <img src="/public/bulleted-list.png" alt="" />
          <div className="mt-[10px]">
            <button className="text-[white] border bg-[#F75E05] p-[10px]">
              Explore courses
            </button>
          </div>
        </div>
      </section>

      <section className="mt-[150px]">
        <div className="flex justify-around items-center">
          <h1>Featured Courses</h1>
          <button className="text-[#F75E05] border border-[#F75E05] p-[10px]">
            View all courses
          </button>
        </div>
        <div className="flex justify-center gap-[25px] items-center mt-[100px]">
          <div className="flex flex-col gap-[20px]">
            <div className="shadow-2xl w-[400px] h-[150px] flex items-center justify-around">
              <img
                src="/public/image.png"
                className="w-[35%] h-[100%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>The Ultimate Google Ads Training Course</h2>
                <h4>
                  <span className="text-[red]"> $100 </span>| by Jerome Bel
                </h4>
              </div>
            </div>
            <div className="shadow-2xl w-[400px] h-[150px] flex items-center justify-around">
              <img
                src="/public/image.png"
                className="w-[35%] h-[100%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>The Ultimate Google Ads Training Course</h2>
                <h4>
                  <span className="text-[red]"> $100 </span>| by Jerome Bel
                </h4>
              </div>
            </div>
            <div className="shadow-2xl w-[400px] h-[150px] flex items-center justify-around">
              <img
                src="/public/image.png"
                className="w-[35%] h-[100%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>The Ultimate Google Ads Training Course</h2>
                <h4>
                  <span className="text-[red]"> $100 </span>| by Jerome Bel
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="shadow-2xl w-[400px] h-[150px] flex items-center justify-around">
              <img
                src="/public/image.png"
                className="w-[35%] h-[100%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>The Ultimate Google Ads Training Course</h2>
                <h4>
                  <span className="text-[red]"> $100 </span>| by Jerome Bel
                </h4>
              </div>
            </div>
            <div className="shadow-2xl w-[400px] h-[150px] flex items-center justify-around">
              <img
                src="/public/image.png"
                className="w-[35%] h-[100%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>The Ultimate Google Ads Training Course</h2>
                <h4>
                  <span className="text-[red]"> $100 </span>| by Jerome Bel
                </h4>
              </div>
            </div>
            <div className="shadow-2xl w-[400px] h-[150px] flex items-center justify-around">
              <img
                src="/public/image.png"
                className="w-[35%] h-[100%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>The Ultimate Google Ads Training Course</h2>
                <h4>
                  <span className="text-[red]"> $100 </span>| by Jerome Bel
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[200px]">
        <h1 className="text-[30px] text-center">That’s how we do it</h1>

        <img
          src="/public/tabs.png"
          className="w-[70%] m-auto mt-[50px]"
          alt=""
        />

        <div className="flex justify-around items-center  mt-[50px]">
          <div className="w-[25%]">
            <h1 className="text-[30px]">Only practicing tutors</h1>
            <div className="mt-[10px]">
              <p className="text-[13px]">
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
                dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
                mollis augue. Nunc, sodales tortor sit diam mi amet massa.
                Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
                dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
          </div>
          <img src="/public/illustration (3).png" className="w-[40%]" alt="" />
        </div>
      </div>

      <div className="m-auto text-center ml-[250px] mt-[100px] text-center">
        <table>
          {data?.map((el) => (
            <tbody key={el.id}>
              <tr>
                <td className="border border-gray-300 p-4 text-base">
                  {el.name}
                </td>
                <td className="border border-gray-300 p-4">
                  <span className={`px-4 py-2 rounded-md`}>
                    {el.isCompleted ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="border border-gray-300 p-4 text-base">
                  {el.description}
                </td>
                <td className="border border-gray-300 p-4 text-base">
                  <button
                    onClick={() => {
                      handeldelete(el.id);
                    }}
                    className="w-[100px] h-[30px] border border-[red] text-[red] rounded-[5px] ml-[50px]"
                  >
                    Dlete
                  </button>
                  <button className="border border-[green] w-[50px] text-[green] rounded-[5px] ml-[50px] w-[100px] h-[30px] ">
                    Edit
                  </button>
                 <a href="/src/pages/info.jsx" className="border border-[blue] w-[50px] text-[blue] rounded-[5px] ml-[50px] w-[200px] h-[30px] p-[10px]">Info</a>
                </td>
                <td className="border border-gray-300 p-4">
                  <input
                    type="checkbox"
                    checked={el.isCompleted}
                    onChange={() => handleCheck(el)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <section className="bg-[#F4F5F6] h-[600px] mt-[200px] items-center pt-[50px]">
        <div className="flex justify-around items-center">
          <h1>Meet our team</h1>
          <img src="/public/hover.png" className="w-[5%]" alt="" />
        </div>
        <div className="flex justify-center gap-[25px] items-center mt-[100px]">
          <div className="flex gap-[20px]">
            <div className=" w-[250px] h-[350px] ">
              <img
                src="/public/image.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>Jerome Bell</h2>
                <h4 className="text-[13px] text-[grey]">
                  Founder and Program Director
                </h4>
              </div>
            </div>
            <div className=" w-[250px] h-[350px] ">
              <img
                src="/public/image.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>Jerome Bell</h2>
                <h4 className="text-[13px] text-[grey]">
                  Founder and Program Director
                </h4>
              </div>
            </div>
            <div className=" w-[250px] h-[350px] ">
              <img
                src="/public/image.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>Jerome Bell</h2>
                <h4 className="text-[13px] text-[grey]">
                  Founder and Program Director
                </h4>
              </div>
            </div>
            <div className=" w-[250px] h-[350px] ">
              <img
                src="/public/image.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <h2>Jerome Bell</h2>
                <h4 className="text-[13px] text-[grey]">
                  Founder and Program Director
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[700px] mt-[200px] items-center pt-[50px]">
        <div className="flex justify-around items-center">
          <h1>Our blog Latest posts</h1>
          <button className="text-[white] border bg-[#F75E05] p-[10px]">
            Go to blog
          </button>
        </div>
        <div className="flex justify-center gap-[25px] items-center mt-[100px]">
          <div className="flex gap-[20px]">
            <div className=" w-[300px] h-[400px] ">
              <img
                src="/public/image32.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <img src="/public/content.png" alt="" />
              </div>
            </div>
            <div className=" w-[300px] h-[400px] ">
              <img
                src="/public/image32.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <img src="/public/content.png" alt="" />
              </div>
            </div>
            <div className=" w-[300px] h-[400px] ">
              <img
                src="/public/image32.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <img src="/public/content.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-[#ef720c67] text-center items-center">
        <div className="flex flex-col gap-[30px] pt-[100px]">
          <h1 className="text-[30px]">
            Subscribe to the Createx School <br /> announcements
          </h1>
          <div>
            <input
              type="search"
              placeholder="Your working email
Subscribe"
              className="bg-[white] p-[10px] w-[400px] rounded-2xl"
            />
            <button className="text-[white] border bg-[#F75E05] p-[10px] rounded-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer>
        <img src="/public/Footer.png" className="h-[300px] w-[100%]" alt="" />
      </footer>
    </div>
  );
};

export default Aboutus;
