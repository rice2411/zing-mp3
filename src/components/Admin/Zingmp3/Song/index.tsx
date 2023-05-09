import * as React from "react";
import { useState, useEffect } from "react";
import TransactionService from "../../../../service/transaction";
import { convertToDate } from "../../../../utils/helpers";
import { debounce } from "lodash";
import Select from "react-select";
import Pagination from "../../../Shared/Pagination";
import SongService from "../../../../service/song";
import { getFile } from "../../../../constant/file";
import BlankModal from "../../../../shared/small_components/Modal/Blank";
import { Field, Form, Formik } from "formik";
import AlbumService from "../../../../service/album";
import useModal from "../../../../hooks/useModal";
import ArtistService from "../../../../service/artist";
import HubService from "../../../../service/hub";
function AdminSong() {
  const { handleModalBlank, handleModalConfirm }: any = useModal();
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchData, setIsFetchData] = useState(false);
  const [contentSearch, setContentSearch] = useState("");
  const [timeData, setTimeData] = useState([]);
  const [editData, setEditData]: any = useState(null);
  const [hub, setHub]: any = useState([]);
  const [artist, setArtist]: any = useState([]);
  const [fileUpload, setFileUpload]: any = useState();
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 0,
    totalDocs: 0,
    totalPages: 0,
  });
  const handleChangeAvatar = async (e: any, setFieldValue: any) => {
    const file = e.currentTarget.files[0];
    const src = URL.createObjectURL(file);
    avatarRef.current.src = src;
    setFieldValue("file", file);
    setFileUpload(file);
  };
  const params = {
    page: 1,
    limit: 10,
    search: contentSearch || "",
  };
  const avatarRef = React.useRef(null);
  const avatarUploadRef = React.useRef(null);
  const handleChangeSearch = (e: any) => {
    setContentSearch(e.target.value);
    handleDebounceSearch(e.target.value);
  };
  // eslint-disable-next-line
  const handleDebounceSearch = React.useCallback(
    debounce((searchValue) => {
      fetchData({
        ...params,
        search: searchValue,
      });
    }, 400),
    []
  );
  const fetchData = async (params: any) => {
    const param = {
      ...params,
      search: params.search || "",
    };
    setIsLoading(true);

    try {
      const response: any = await SongService.getAll(param);
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        setData(dataRaw);
        setPagination(response?.data?.paginate);
        const times: any = await Promise.all(
          dataRaw?.map(async (song: any) => {
            const newAudio = new Audio(getFile(song.audio));
            const getDuration = () =>
              new Promise((resolve) => {
                newAudio.onloadedmetadata = () => {
                  resolve(newAudio.duration);
                };
              });
            const duration: any = await getDuration();
            const time: any = new Date(duration * 1000)
              .toISOString()
              .slice(14, 19);
            return time;
          })
        );

        setTimeData(times);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchHubdata = async (modal: string, items: any) => {
    try {
      const response: any = await HubService.getAll();
      const dataRaw = response?.data?.data;

      if (dataRaw) {
        const format: any = [];
        dataRaw.map((item: any) => {
          const option = {
            value: item._id,
            label: item.name,
          };
          format.push(option);
        });
        setHub(format);
        if (modal == "update") {
          const options: any = [];
          format?.map((item: any) => {
            for (let i = 0; i < items.typeIds.length; i++) {
              if (items.typeIds[i] == item.value) {
                options.push(item);
              }
            }
          });
          return Promise.resolve(options);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleOpenModal = async (modal: string, item?: any) => {
    // await fetchHubdata(modal, item);
    handleModalBlank({
      text: {
        title: modal == "create" ? "Thêm mới" : "Chỉnh sửa",
      },
      isShow: true,
      onSubmit: () => {},
    });
  };
  const fetchArtistdata = async (modal: string, items: any) => {
    try {
      const response: any = await ArtistService.getAll({ is_paginate: false });
      const dataRaw = response?.data?.data;

      if (dataRaw) {
        const format: any = [];
        dataRaw.map((item: any) => {
          const option = {
            value: item._id,
            label: item.name,
          };
          format.push(option);
        });
        setArtist(format);
        if (modal == "update") {
          const options: any = [];
          format?.map((item: any) => {
            for (let i = 0; i < items.authors.length; i++) {
              if (items.authors[i]._id == item.value) {
                options.push(item);
              }
            }
          });
          return Promise.resolve(options);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleModifyArtist = async (values: any) => {};
  useEffect(() => {
    fetchData(params);
    setContentSearch("");
  }, [isFetchData]);
  return (
    <div className="relative overflow-x-auto shadow-lg  mt-3 rounded">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div>
            <p>
              <b> Danh sách bài hát</b>
            </p>
            <button
              onClick={async () => {
                setEditData(null);
                await fetchHubdata("create", null);
                await fetchArtistdata("create", null);
                handleOpenModal("create");
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Thêm mới
            </button>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2  w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhấn vào đây để tìm kiếm.."
            value={contentSearch || ""}
            onChange={handleChangeSearch}
          />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                BÀI HÁT
              </th>
              <th scope="col" className="px-6 py-3">
                ALBUM
              </th>
              <th scope="col" className="px-6 py-3">
                THỜI LƯỢNG
              </th>
              <th scope="col" className="px-6 py-3">
                LƯỢT NGHE
              </th>
              <th scope="col" className="px-6 py-3">
                HÀNH ĐỘNG
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: any) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {10 * (pagination?.page - 1) + index + 1}
                </th>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={getFile(item?.image)}
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold flex items-center">
                      {item?.name}{" "}
                      <div
                        className={`ml-2 ${
                          item?.is_vip ? "" : "hidden"
                        } h-5 w-5`}
                      >
                        <span className="overflow-hidden ">
                          <img
                            src="/icon/vip-label.svg"
                            className="w-full h-full"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="font-normal text-gray-500">
                      {item?.artist.name}
                    </div>
                  </div>
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.album?.name}
                </th>
                <td className="px-6 py-4">{timeData[index]}</td>

                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {item?.totalViews.toLocaleString("vi-VN", {
                      maximumSignificantDigits: 3,
                    })}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={async () => {
                      const data = await fetchHubdata("update", item);
                      const data2 = await fetchArtistdata("update", item);
                      await setEditData({ ...item, hub: data, artist: data2 });

                      await handleOpenModal("update", item);
                    }}
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-3">
          {pagination?.totalPages > 1 && (
            <Pagination
              setIsLoading={setIsLoading}
              fetchData={fetchData}
              paginate={pagination}
              params={params}
            />
          )}
        </div>
      </div>{" "}
      <BlankModal
        className={`bg-white text-black overflow-auto`}
        classHeader={``}
        isShowHeader={true}
      >
        <Formik
          initialValues={{
            albumId: editData?._id || "",
            name: editData?.name || "",
            publicationYear: editData?.publicationYear || "",
            description: editData?.description || "",
            typeIds: editData?.hub || [],
            artistId: editData?.artist || [],
            image: editData?.image || "avatar_default.png",
            file: null,
          }}
          onSubmit={handleModifyArtist}
          enableReinitialize={true}
        >
          {({ errors, touched, values, setFieldValue, handleChange }) => (
            <>
              <Form encType="multipart/form-data">
                <div className="p-6 space-y-6">
                  <div className="flex">
                    <div className="flex flex-col  ">
                      <div className=" flex justify-center mb-4">
                        <img
                          ref={avatarRef}
                          className="w-40 h-40 rounded-lg"
                          src={getFile(values.avatar)}
                          alt="Rounded avatar"
                        />
                      </div>
                      <div className=" flex justify-center mb-4">
                        <label
                          htmlFor="first-name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Ảnh bìa
                        </label>
                      </div>
                      <div className=" flex justify-center">
                        <input
                          ref={avatarUploadRef}
                          className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="small_size"
                          type="file"
                          name="file"
                          onChange={(e) => {
                            handleChangeAvatar(e, setFieldValue);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-[500px] ml-5">
                      <div className=" mb-4 ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Tên bài hát
                        </label>
                        <Field
                          type="text"
                          name="name"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Tên album"
                          required=""
                          value={values.name}
                        />
                      </div>
                      <div className="mb-4 ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nghệ sĩ
                        </label>
                        <Select
                          // defaultValue={[hub[2], hub[3]]}
                          isMulti
                          name="artistId"
                          options={artist}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          value={values.artistId}
                          onChange={(e: any) => {
                            setFieldValue("artistId", e);
                          }}
                        />
                      </div>
                      <div className="mb-4 ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Thể loại
                        </label>
                        <Select
                          // defaultValue={[hub[2], hub[3]]}
                          isMulti
                          name="typeIds"
                          options={hub}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          value={values.typeIds}
                          onChange={(e: any) => {
                            setFieldValue("typeIds", e);
                          }}
                        />
                      </div>
                      <div className=" mb-4 ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          File âm thanh
                        </label>
                        <Field
                          type="file"
                          name="audio"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Tên album"
                          required=""
                          value={values.name}
                        />
                      </div>
                      <div className=" ">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Mô tả
                        </label>
                        <textarea
                          name="description"
                          rows={5}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Mô tả về nghệ sĩ..."
                          defaultValue={values.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-row-reverse px-6   ">
                  <button
                    type="submit"
                    className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    {editData != null ? "Chỉnh sửa" : "Thêm mới"}
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </BlankModal>
    </div>
  );
}

export default AdminSong;
