import React, { useEffect, useRef } from "react";

export default function ChatBody({ chats }) {
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "auto" })
      }
    
      useEffect(scrollToBottom, []);
  return (
    <div  className="h-[72vh] overflow-y-auto">
      {/* {chats?.length>0 && (
            chats.map(chat=>{
                return ( <>
                    <div>asdgs</div>
                </>)
            }
            )
        )} */}
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex ">
            <div class="avatar">
              <div class="w-8 h-8  rounded-full">
                <img src={"https://placeimg.com/192/192/people"} alt="" />
              </div>
            </div>
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Ram thapa</p>
                <p className="text-xs font-extralight my-auto ml-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
              </div>
              <p className="text-sm leading-4  ">Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ram w-full flex justify-end">
        <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
          <div className="flex items-end">
            <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
              <div className="flex justify-between">
                <p className="text-xs font-extralight my-auto mr-3">
                  {" "}
                  2022-07-31 01:22:12
                </p>
                <p className="text-sm font-semibold">Chirag thapa</p>
              </div>
              <p className="text-sm leading-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate ipsa inventore quae, explicabo aliquid vitae. Voluptas sapiente delectus, hic nisi, et animi quasi nobis quis quae necessitatibus illo soluta saepe. Quidem facere expedita at, dolorem non sit porro nihil. Est possimus voluptates doloribus inventore, reiciendis dolor totam? Repellendus quaerat aliquid iste laboriosam corrupti, suscipit provident id sed. Provident voluptates ipsa adipisci amet autem dolores quidem facilis quos inventore. Harum itaque inventore temporibus rem nisi voluptas esse, omnis voluptates sunt minima. Commodi odit a nisi officia rerum, necessitatibus unde quos sapiente repellendus perferendis accusamus cum quidem fuga neque. Deleniti, aliquid?</p>
            </div>
          </div>
        </div>
      </div>
      {/* yoo last ma hunu oarxa */}
      <div ref={messagesEndRef} ></div>
    </div>
  );
}
