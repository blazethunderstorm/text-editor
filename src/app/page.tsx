"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaRedo,
  FaUndo,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaListUl,
  FaListOl,
} from "react-icons/fa";

export default function TextEditor() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen w-full flex items-start justify-start bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white p-10">
      <motion.div
        className="w-1/4 flex flex-col px-6 py-6 bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 mr-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Text Editor
        </h1>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {[FaUndo, FaRedo, FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight, FaListUl, FaListOl].map(
            (Icon, index) => (
              <Button
                key={index}
                className="p-3 bg-gray-700 hover:bg-purple-600 text-white rounded-lg transition duration-300 shadow-lg border border-gray-600 hover:shadow-purple-500/50"
              >
                <Icon size={20} />
              </Button>
            )
          )}
        </div>
      </motion.div>

      <motion.div
        className="w-3/4 flex-1 p-8 bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <textarea
          className="w-full min-h-[80vh] bg-transparent text-white text-lg outline-none resize-y placeholder-gray-400 no-scrollbar p-4 border-2 border-gray-700 focus:border-purple-500 transition-all duration-300 rounded-lg shadow-inner"
          placeholder="Start typing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </motion.div>
    </div>
  );
}