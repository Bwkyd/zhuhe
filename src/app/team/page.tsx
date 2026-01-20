import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembers } from "@/data/company";

export const metadata: Metadata = {
  title: "公司团队",
  description: "认识 ZHUHE祝赫服饰的核心公司团队成员",
};

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            公司团队
          </h1>
          <p className="text-sm text-gray-500">
            认识我们充满创意与热情的核心团队
          </p>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              祝赫服饰拥有一支年轻而专业的团队，团队成员来自服装设计、时尚营销等不同领域，
              对女装设计有着共同的热爱与追求。
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center p-4">
                {/* 头像 */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto mb-3 md:mb-4">
                  <Avatar className="w-full h-full border border-gray-200">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-gray-100 text-gray-600 text-lg md:text-2xl">
                      {member.name[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* 姓名 */}
                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1">
                  {member.name}
                </h3>

                {/* 职位 */}
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  {member.title}
                </p>

                {/* 简介 */}
                <p className="text-xs text-gray-400 leading-relaxed hidden md:block">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-3">
            加入我们
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto mb-4 leading-relaxed">
            我们始终欢迎有才华、有热情的人才加入祝赫大家庭。
          </p>
          <p className="text-sm font-medium text-gray-900">
            简历投递：hr@zhuhe.com
          </p>
        </div>
      </section>
    </div>
  );
}
