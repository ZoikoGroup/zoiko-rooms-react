"use client";

import React, { useState } from "react";
import Image from "next/image";

type Category =
  | "All news"
  | "Product"
  | "Company"
  | "Safety & Trust"
  | "Partnerships"
  | "Policy";

interface Article {
  id: number;
  category: Category;
  title: string;
  description: string;
  date: string;
  updated?: boolean;
  image: string;
}

export default function FilteredAnnouncementsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All news");

  const categories: Category[] = [
    "All news",
    "Product",
    "Company",
    "Safety & Trust",
    "Partnerships",
    "Policy",
  ];

  const articles: Article[] = [
    {
      id: 1,
      category: "Product",
      title:
        "Room Passport evidence tiers now show inspection recency at a glance",
      description:
        "A visible freshness indicator on every evidence tag helps seekers and providers see exactly how current a room's verification status is, without leaving the listing.",
      date: "Published 2 Sep 2026",
      image: "/images/newsroom/1.png",
    },
    {
      id: 2,
      category: "Product",
      title: "City Guides now covers five markets with sourced local context",
      description:
        "Berlin, Amsterdam, Lisbon, Tokyo, and Nairobi are now live in City Guides, each with sourced rental terminology, costs, transport, and safety context.",
      date: "Published 27 Aug 2026",
      image: "/images/newsroom/2.png",
    },
    {
      id: 3,
      category: "Safety & Trust",
      title:
        "Expanded scam-pattern detection now covers payment redirection attempts",
      description:
        "New automated checks flag common payment redirection language in messages before a seeker sees it, alongside existing manual reporting routes.",
      date: "Published 20 Aug 2026",
      updated: true,
      image: "/images/newsroom/3.png",
    },
    {
      id: 4,
      category: "Product",
      title:
        "Zoiko Rooms Pro adds scoped webhook support for availability sync",
      description:
        "Providers using Zoiko Rooms Pro can now receive near-current availability change notifications through signed webhooks, in addition to existing polling options.",
      date: "Published 12 Aug 2026",
      image: "/images/newsroom/4.png",
    },
    {
      id: 5,
      category: "Company",
      title:
        "Healthcare organizations can now review governed workforce housing models",
      description:
        "A new Organizations page explains how healthcare bodies may coordinate room access for clinicians, trainees, and temporary staff without clinical data ever entering housing workflows.",
      date: "Published 5 Aug 2026",
      image: "/images/newsroom/5.png",
    },
    {
      id: 6,
      category: "Policy",
      title:
        "Government & Public Sector page details accountable room-access programs",
      description:
        "The new page explains referral, eligibility assessment, nomination, allocation, and support-only models for public bodies, with named human decision ownership required throughout.",
      date: "Published 30 Jul 2026",
      image: "/images/newsroom/6.png",
    },
  ];

  const filteredArticles =
    activeCategory === "All news"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Browse by topic Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Browse by Topic
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
            Filter approved announcements
          </h2>
        </div>

        {/* Filter Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#182232] text-white border-[#182232] shadow-xs"
                    : "bg-white text-[#1C1917] border-[#E7E5E4] hover:bg-[#FAF6F0]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Latest news Sub-Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Latest News
          </p>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight mb-2">
            Recent approved updates
          </h3>
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Ordered by publication date. Correction or update status is shown
            directly on the card when it applies.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredArticles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E7E5E4] overflow-hidden shadow-xs flex flex-col justify-between transition-all hover:shadow-md group cursor-pointer"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-16/10 bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Category Pill and Status Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF6F0] border border-[#E7DFD3] text-[10px] font-bold uppercase tracking-wider text-[#182232]">
                      {item.category}
                    </span>
                    {item.updated && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#182232]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#182232]" />{" "}
                        Updated
                      </span>
                    )}
                  </div>

                  {/* Card Title */}
                  <h4 className="text-sm sm:text-base font-bold text-[#1C1917] leading-snug mb-2 group-hover:text-[#D91414] transition-colors">
                    {item.title}
                  </h4>

                  {/* Card Description */}
                  <p className="text-xs text-[#78716C] leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-[#A8A29E] font-normal">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State when no items match category */}
        {filteredArticles.length === 0 && (
          <div className="py-12 text-center text-[#78716C] text-sm">
            No announcements found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
