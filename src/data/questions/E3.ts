import type { Question } from "@/types";

// Topic E3 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "E3-gen01",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparative",
      "short-adj"
    ],
    "prompt": "Chọn đáp án đúng để hoàn thành câu:",
    "sentence": "The new office is much ___ than the old one downtown.",
    "options": [
      "large",
      "larger",
      "largest",
      "more large"
    ],
    "answerIndex": 1,
    "explanationVi": "Dùng 'larger' vì có 'than' (so sánh hơn) và 'large' là tính từ ngắn.",
    "sentenceVi": "Văn phòng mới lớn hơn nhiều so với văn phòng cũ ở trung tâm thành phố.",
    "vocabNotes": [
      {
        "word": "new",
        "pos": "tính từ",
        "vi": "mới"
      },
      {
        "word": "office",
        "pos": "danh từ",
        "vi": "văn phòng"
      },
      {
        "word": "much larger",
        "pos": "cụm từ",
        "vi": "lớn hơn nhiều"
      },
      {
        "word": "old",
        "pos": "tính từ",
        "vi": "cũ"
      },
      {
        "word": "downtown",
        "pos": "trạng từ",
        "vi": "trung tâm thành phố"
      }
    ]
  },
  {
    "id": "E3-gen02",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparative",
      "emphasis"
    ],
    "prompt": "Chọn từ thích hợp để nhấn mạnh sự so sánh:",
    "sentence": "The production cost of the new model is ___ higher than we originally estimated.",
    "options": [
      "very",
      "much",
      "more",
      "so"
    ],
    "answerIndex": 1,
    "explanationVi": "Sử dụng 'much' trước tính từ so sánh hơn (higher) để nhấn mạnh mức độ chênh lệch.",
    "sentenceVi": "Chi phí sản xuất của mẫu mới cao hơn nhiều so với ước tính ban đầu của chúng tôi.",
    "vocabNotes": [
      {
        "word": "production cost",
        "pos": "cụm từ",
        "vi": "chi phí sản xuất"
      },
      {
        "word": "model",
        "pos": "danh từ",
        "vi": "mẫu"
      },
      {
        "word": "much higher",
        "pos": "cụm từ",
        "vi": "cao hơn nhiều"
      },
      {
        "word": "originally",
        "pos": "trạng từ",
        "vi": "ban đầu"
      },
      {
        "word": "estimated",
        "pos": "động từ",
        "vi": "ước tính"
      }
    ]
  },
  {
    "id": "E3-gen03",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "double-comparative"
    ],
    "prompt": "Điền từ còn thiếu vào cấu trúc so sánh kép:",
    "sentence": "The more you practice your English, the ___ confident you will become.",
    "explanationVi": "Cấu trúc 'The more... the more...' diễn tả quan hệ nhân quả (Càng... thì càng...).",
    "sentenceVi": "Bạn càng luyện tập tiếng Anh nhiều, bạn sẽ càng tự tin hơn.",
    "vocabNotes": [
      {
        "word": "practice",
        "pos": "động từ",
        "vi": "luyện tập"
      },
      {
        "word": "English",
        "pos": "danh từ",
        "vi": "tiếng Anh"
      },
      {
        "word": "confident",
        "pos": "tính từ",
        "vi": "tự tin"
      },
      {
        "word": "become",
        "pos": "động từ",
        "vi": "trở nên"
      }
    ],
    "options": [
      "more",
      "much",
      "most",
      "less"
    ],
    "answerIndex": 0
  },
  {
    "id": "E3-gen04",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "superlative",
      "emphasis"
    ],
    "prompt": "Chọn đáp án đúng nhất:",
    "sentence": "This is by far the ___ efficient logistics system the company has ever implemented.",
    "options": [
      "more",
      "most",
      "much",
      "many"
    ],
    "answerIndex": 1,
    "explanationVi": "Cụm 'by far' đi kèm với so sánh nhất (the most efficient) để nhấn mạnh sự vượt trội nhất.",
    "sentenceVi": "Đây là hệ thống logistics hiệu quả nhất mà công ty từng triển khai.",
    "vocabNotes": [
      {
        "word": "by far",
        "pos": "cụm từ",
        "vi": "cho đến nay"
      },
      {
        "word": "efficient",
        "pos": "tính từ",
        "vi": "hiệu quả"
      },
      {
        "word": "logistics system",
        "pos": "cụm từ",
        "vi": "hệ thống logistics"
      },
      {
        "word": "company",
        "pos": "danh từ",
        "vi": "công ty"
      },
      {
        "word": "ever",
        "pos": "trạng từ",
        "vi": "từng"
      },
      {
        "word": "implemented",
        "pos": "động từ",
        "vi": "triển khai"
      }
    ]
  },
  {
    "id": "E3-gen05",
    "topicId": "E3",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "equal-comparison",
      "multiples"
    ],
    "prompt": "Sắp xếp các từ sau thành câu hoàn chỉnh:",
    "tiles": [
      "is",
      "This",
      "laptop",
      "twice",
      "as",
      "expensive",
      "as",
      "mine"
    ],
    "answer": "This laptop is twice as expensive as mine",
    "explanationVi": "Cấu trúc so sánh bội số: 'Số lần + as + adj + as'.",
    "sentenceVi": "Chiếc laptop này đắt gấp đôi chiếc của tôi.",
    "vocabNotes": [
      {
        "word": "laptop",
        "pos": "danh từ",
        "vi": "máy tính xách tay"
      },
      {
        "word": "twice",
        "pos": "trạng từ",
        "vi": "gấp đôi"
      },
      {
        "word": "expensive",
        "pos": "tính từ",
        "vi": "đắt"
      }
    ]
  },
  {
    "id": "E3-gen06",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparative",
      "adverb"
    ],
    "prompt": "Chọn trạng từ ở dạng so sánh phù hợp:",
    "sentence": "The new technician repaired the machinery ___ than the previous one.",
    "options": [
      "quickly",
      "quickest",
      "more quickly",
      "as quickly"
    ],
    "answerIndex": 2,
    "explanationVi": "Dùng 'more quickly' vì đây là so sánh hơn của trạng từ dài (có đuôi -ly).",
    "sentenceVi": "Kỹ thuật viên mới đã sửa chữa máy móc nhanh hơn người trước.",
    "vocabNotes": [
      {
        "word": "technician",
        "pos": "danh từ",
        "vi": "kỹ thuật viên"
      },
      {
        "word": "repaired",
        "pos": "động từ",
        "vi": "sửa chữa"
      },
      {
        "word": "machinery",
        "pos": "danh từ",
        "vi": "máy móc"
      },
      {
        "word": "more quickly",
        "pos": "cụm từ",
        "vi": "nhanh hơn"
      },
      {
        "word": "previous",
        "pos": "tính từ",
        "vi": "trước đó"
      }
    ]
  },
  {
    "id": "E3-gen07",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "superlative",
      "short-adj"
    ],
    "prompt": "Điền dạng đúng của tính từ 'cold' vào chỗ trống:",
    "sentence": "January is usually the ___ month of the year in Northern Vietnam.",
    "explanationVi": "Dùng dạng so sánh nhất 'coldest' vì có mạo từ 'the' và phạm vi 'of the year'.",
    "sentenceVi": "Tháng Giêng thường là tháng lạnh nhất trong năm ở miền Bắc Việt Nam.",
    "vocabNotes": [
      {
        "word": "January",
        "pos": "danh từ",
        "vi": "tháng Giêng"
      },
      {
        "word": "usually",
        "pos": "trạng từ",
        "vi": "thường"
      },
      {
        "word": "coldest",
        "pos": "tính từ",
        "vi": "lạnh nhất"
      },
      {
        "word": "month",
        "pos": "danh từ",
        "vi": "tháng"
      },
      {
        "word": "year",
        "pos": "danh từ",
        "vi": "năm"
      },
      {
        "word": "Northern Vietnam",
        "pos": "cụm từ",
        "vi": "miền Bắc Việt Nam"
      }
    ],
    "options": [
      "coldest",
      "coolest",
      "colder",
      "cold"
    ],
    "answerIndex": 0
  },
  {
    "id": "E3-gen08",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "equal-comparison",
      "negative"
    ],
    "prompt": "Chọn đáp án phù hợp cho câu phủ định:",
    "sentence": "The second marketing campaign was not ___ successful as the first one.",
    "options": [
      "so",
      "more",
      "most",
      "than"
    ],
    "answerIndex": 0,
    "explanationVi": "Trong câu phủ định của so sánh ngang bằng, ta có thể dùng 'not so... as' thay cho 'not as... as'.",
    "sentenceVi": "Chiến dịch marketing thứ hai không thành công bằng chiến dịch đầu tiên.",
    "vocabNotes": [
      {
        "word": "second",
        "pos": "tính từ",
        "vi": "thứ hai"
      },
      {
        "word": "marketing campaign",
        "pos": "cụm từ",
        "vi": "chiến dịch marketing"
      },
      {
        "word": "successful",
        "pos": "tính từ",
        "vi": "thành công"
      },
      {
        "word": "first",
        "pos": "tính từ",
        "vi": "đầu tiên"
      }
    ]
  },
  {
    "id": "E3-gen09",
    "topicId": "E3",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "superlative",
      "noun-phrase"
    ],
    "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
    "tiles": [
      "the",
      "She",
      "is",
      "best",
      "student",
      "in",
      "her",
      "class"
    ],
    "answer": "She is the best student in her class",
    "explanationVi": "Cấu trúc so sánh nhất: 'the + best' đi kèm với giới từ 'in' để chỉ phạm vi nhóm/địa điểm.",
    "sentenceVi": "Cô ấy là học sinh giỏi nhất lớp.",
    "vocabNotes": [
      {
        "word": "best",
        "pos": "tính từ",
        "vi": "tốt nhất"
      },
      {
        "word": "student",
        "pos": "danh từ",
        "vi": "học sinh"
      },
      {
        "word": "class",
        "pos": "danh từ",
        "vi": "lớp học"
      }
    ]
  },
  {
    "id": "E3-gen10",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparative",
      "irregular"
    ],
    "prompt": "Điền dạng so sánh hơn của từ 'bad' vào chỗ trống:",
    "sentence": "The traffic congestion this morning was even ___ than it was yesterday.",
    "explanationVi": "'Worse' là dạng so sánh hơn bất quy tắc của tính từ 'bad'.",
    "sentenceVi": "Tình trạng tắc nghẽn giao thông sáng nay thậm chí còn tệ hơn hôm qua.",
    "vocabNotes": [
      {
        "word": "traffic congestion",
        "pos": "cụm từ",
        "vi": "tắc nghẽn giao thông"
      },
      {
        "word": "morning",
        "pos": "danh từ",
        "vi": "buổi sáng"
      },
      {
        "word": "even worse",
        "pos": "cụm từ",
        "vi": "thậm chí tệ hơn"
      },
      {
        "word": "yesterday",
        "pos": "trạng từ",
        "vi": "hôm qua"
      }
    ],
    "options": [
      "bad",
      "better",
      "worse",
      "worst"
    ],
    "answerIndex": 2
  },
  {
    "id": "E3-bulk-001",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "equal-as-as"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He is ___ as his brother.",
    "options": [
      "tall",
      "taller",
      "as tall",
      "tallest"
    ],
    "answerIndex": 2,
    "explanationVi": "So sánh ngang bằng: \"as + tính từ + as\".",
    "sentenceVi": "Anh ấy cao bằng anh trai mình.",
    "vocabNotes": [
      {
        "word": "brother",
        "pos": "danh từ",
        "vi": "anh / em trai"
      }
    ]
  },
  {
    "id": "E3-bulk-002",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "comparative-short"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This building is ___ than the one next door.",
    "options": [
      "tall",
      "taller",
      "tallest",
      "more tall"
    ],
    "answerIndex": 1,
    "explanationVi": "So sánh hơn tính từ ngắn (1 âm): + -er.",
    "sentenceVi": "Toà nhà này cao hơn toà nhà bên cạnh.",
    "vocabNotes": [
      {
        "word": "building",
        "pos": "danh từ",
        "vi": "toà nhà"
      }
    ]
  },
  {
    "id": "E3-bulk-003",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "comparative-long"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This software is ___ than the previous version.",
    "options": [
      "expensive",
      "more expensive",
      "expensiver",
      "most expensive"
    ],
    "answerIndex": 1,
    "explanationVi": "So sánh hơn tính từ dài: more + adj.",
    "sentenceVi": "Phần mềm này đắt hơn phiên bản trước.",
    "vocabNotes": [
      {
        "word": "software",
        "pos": "danh từ",
        "vi": "phần mềm"
      }
    ]
  },
  {
    "id": "E3-bulk-004",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "superlative-short"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "That was ___ day of the year.",
    "options": [
      "hot",
      "hotter",
      "the hottest",
      "most hot"
    ],
    "answerIndex": 2,
    "explanationVi": "So sánh nhất tính từ ngắn: the + adj + -est. \"Hot\" gấp đôi phụ âm: hottest.",
    "sentenceVi": "Đó là ngày nóng nhất trong năm.",
    "vocabNotes": [
      {
        "word": "hot",
        "pos": "tính từ",
        "vi": "nóng"
      }
    ]
  },
  {
    "id": "E3-bulk-005",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "superlative-long"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This is ___ painting in the entire museum.",
    "options": [
      "beautiful",
      "more beautiful",
      "beautifuller",
      "the most beautiful"
    ],
    "answerIndex": 3,
    "explanationVi": "So sánh nhất tính từ dài: the most + adj.",
    "sentenceVi": "Đây là bức tranh đẹp nhất trong toàn bộ bảo tàng.",
    "vocabNotes": [
      {
        "word": "painting",
        "pos": "danh từ",
        "vi": "bức tranh"
      },
      {
        "word": "museum",
        "pos": "danh từ",
        "vi": "bảo tàng"
      }
    ]
  },
  {
    "id": "E3-bulk-006",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "irregular-good"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Her solution is ___ than mine.",
    "options": [
      "gooder",
      "more good",
      "better",
      "best"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Good\" bất quy tắc: good → better → best.",
    "sentenceVi": "Giải pháp của cô ấy tốt hơn giải pháp của tôi.",
    "vocabNotes": [
      {
        "word": "solution",
        "pos": "danh từ",
        "vi": "giải pháp"
      }
    ]
  },
  {
    "id": "E3-bulk-007",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "irregular-bad"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This traffic jam is ___ than yesterday's.",
    "options": [
      "worse",
      "badder",
      "more bad",
      "worst"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Bad\" bất quy tắc: bad → worse → worst.",
    "sentenceVi": "Vụ kẹt xe này tệ hơn hôm qua.",
    "vocabNotes": [
      {
        "word": "traffic jam",
        "pos": "cụm từ",
        "vi": "kẹt xe"
      }
    ]
  },
  {
    "id": "E3-bulk-008",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "irregular-far"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "How ___ is the airport from here?",
    "options": [
      "far",
      "farer",
      "more far",
      "farther"
    ],
    "answerIndex": 0,
    "explanationVi": "\"How far\" để hỏi khoảng cách. Đây là so sánh nguyên gốc, không có dạng so sánh.",
    "sentenceVi": "Sân bay cách đây bao xa?",
    "vocabNotes": [
      {
        "word": "airport",
        "pos": "danh từ",
        "vi": "sân bay"
      }
    ]
  },
  {
    "id": "E3-bulk-009",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "not-as-as"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This phone is ___ as my old one.",
    "options": [
      "not as good",
      "not so better",
      "more good",
      "worst"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Not as + adj + as\" = không bằng (kém hơn).",
    "sentenceVi": "Điện thoại này không tốt bằng cái cũ của tôi.",
    "vocabNotes": [
      {
        "word": "phone",
        "pos": "danh từ",
        "vi": "điện thoại"
      }
    ]
  },
  {
    "id": "E3-bulk-010",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "comparison",
      "superlative-irregular"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Of all the candidates, she is ___.",
    "options": [
      "the better",
      "the best",
      "the more",
      "most"
    ],
    "answerIndex": 1,
    "explanationVi": "\"The best\" là dạng so sánh nhất của \"good\".",
    "sentenceVi": "Trong tất cả các ứng viên, cô ấy là người giỏi nhất.",
    "vocabNotes": [
      {
        "word": "candidate",
        "pos": "danh từ",
        "vi": "ứng viên"
      }
    ]
  },
  {
    "id": "E3-bulk-011",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "more-and-more"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The weather is getting ___ as winter approaches.",
    "options": [
      "cold and cold",
      "cold",
      "colder and colder",
      "more cold"
    ],
    "answerIndex": 2,
    "explanationVi": "Cấu trúc \"comparative + and + comparative\" diễn tả sự tăng dần.",
    "sentenceVi": "Thời tiết ngày càng lạnh hơn khi mùa đông đến gần.",
    "vocabNotes": [
      {
        "word": "approach",
        "pos": "động từ",
        "vi": "đến gần"
      }
    ]
  },
  {
    "id": "E3-bulk-012",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "the-more-the-more"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you exercise, ___ you will feel.",
    "options": [
      "More / better",
      "The more / the better",
      "More / the better",
      "The more / better"
    ],
    "answerIndex": 1,
    "explanationVi": "\"The + comparative ..., the + comparative ...\" = càng ... càng ...",
    "sentenceVi": "Bạn càng tập luyện, bạn sẽ càng cảm thấy tốt hơn.",
    "vocabNotes": [
      {
        "word": "exercise",
        "pos": "động từ",
        "vi": "tập luyện"
      }
    ]
  },
  {
    "id": "E3-bulk-013",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "much-vs-very"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This restaurant is ___ better than the other one.",
    "options": [
      "very",
      "much",
      "more",
      "most"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Much/far/a lot + comparative\" để nhấn mạnh sự khác biệt lớn. \"Very\" không đi với so sánh.",
    "sentenceVi": "Nhà hàng này tốt hơn nhiều so với nhà hàng kia.",
    "vocabNotes": [
      {
        "word": "restaurant",
        "pos": "danh từ",
        "vi": "nhà hàng"
      }
    ]
  },
  {
    "id": "E3-bulk-014",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "less-than"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This route is ___ challenging than the one I usually take.",
    "options": [
      "less",
      "lesser",
      "more less",
      "not"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Less + adj + than\" = ít ... hơn.",
    "sentenceVi": "Đường này ít thử thách hơn đường tôi thường đi.",
    "vocabNotes": [
      {
        "word": "route",
        "pos": "danh từ",
        "vi": "đường / tuyến"
      },
      {
        "word": "challenging",
        "pos": "tính từ",
        "vi": "thử thách"
      }
    ]
  },
  {
    "id": "E3-bulk-015",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "double-comparison-twice-as"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This new model is ___ as fast as the previous one.",
    "options": [
      "twice",
      "double",
      "two times",
      "twos"
    ],
    "answerIndex": 0,
    "explanationVi": "Cấu trúc \"twice/three times + as + adj + as\" = gấp 2/3 lần.",
    "sentenceVi": "Mẫu mới này nhanh gấp 2 lần mẫu trước.",
    "vocabNotes": [
      {
        "word": "model",
        "pos": "danh từ",
        "vi": "mẫu"
      },
      {
        "word": "fast",
        "pos": "tính từ",
        "vi": "nhanh"
      }
    ]
  },
  {
    "id": "E3-bulk-016",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "one-of-the-most"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Vietnam is one of ___ countries in Southeast Asia.",
    "options": [
      "beautifulest",
      "most beautiful",
      "the most beautiful",
      "more beautiful"
    ],
    "answerIndex": 2,
    "explanationVi": "\"One of + the + so sánh nhất + N (số nhiều)\" là cấu trúc cố định.",
    "sentenceVi": "Việt Nam là một trong những nước đẹp nhất Đông Nam Á.",
    "vocabNotes": [
      {
        "word": "Southeast Asia",
        "pos": "cụm từ",
        "vi": "Đông Nam Á"
      }
    ]
  },
  {
    "id": "E3-bulk-017",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "fewer-vs-less-people"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "There are ___ employees in this department than before.",
    "options": [
      "less",
      "fewer",
      "few",
      "least"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Fewer\" cho danh từ đếm được số nhiều. \"Less\" cho danh từ không đếm được.",
    "sentenceVi": "Có ít nhân viên hơn ở phòng này so với trước đây.",
    "vocabNotes": [
      {
        "word": "department",
        "pos": "danh từ",
        "vi": "phòng / bộ phận"
      }
    ]
  },
  {
    "id": "E3-bulk-018",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "superlative-of-three"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Of the three proposals, this is ___.",
    "options": [
      "the better",
      "the best",
      "more good",
      "most good"
    ],
    "answerIndex": 1,
    "explanationVi": "So sánh nhất khi có 3+ đối tượng: the best.",
    "sentenceVi": "Trong 3 đề xuất, đây là cái tốt nhất.",
    "vocabNotes": [
      {
        "word": "proposal",
        "pos": "danh từ",
        "vi": "đề xuất"
      }
    ]
  },
  {
    "id": "E3-bulk-019",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "by-far"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This is ___ the most reliable car I have ever owned.",
    "options": [
      "very",
      "much",
      "more",
      "by far"
    ],
    "answerIndex": 3,
    "explanationVi": "\"By far\" để nhấn mạnh so sánh nhất (= cách xa).",
    "sentenceVi": "Đây là chiếc xe đáng tin cậy nhất tôi từng sở hữu.",
    "vocabNotes": [
      {
        "word": "reliable",
        "pos": "tính từ",
        "vi": "đáng tin cậy"
      },
      {
        "word": "own",
        "pos": "động từ",
        "vi": "sở hữu"
      }
    ]
  },
  {
    "id": "E3-bulk-020",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "comparative-and-adverb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She works ___ than anyone else in the office.",
    "options": [
      "hard",
      "harder",
      "hardest",
      "more hardly"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Hard\" vừa là tính từ vừa là trạng từ. So sánh hơn: harder.",
    "sentenceVi": "Cô ấy làm việc chăm hơn bất kỳ ai khác trong văn phòng.",
    "vocabNotes": [
      {
        "word": "hard",
        "pos": "trạng từ",
        "vi": "chăm chỉ"
      }
    ]
  },
  {
    "id": "E3-bulk-021",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "irregular-old-elder"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My ___ brother lives in Tokyo.",
    "options": [
      "older",
      "elder",
      "most old",
      "oldest"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Elder\" dùng cho thứ bậc gia đình (elder brother/sister).",
    "sentenceVi": "Anh trai lớn của tôi sống ở Tokyo.",
    "vocabNotes": [
      {
        "word": "brother",
        "pos": "danh từ",
        "vi": "anh / em trai"
      }
    ]
  },
  {
    "id": "E3-bulk-022",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "adverb-superlative-most"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He drives ___ of all my friends.",
    "options": [
      "most carefully",
      "carefully",
      "more carefully",
      "the most carefully"
    ],
    "answerIndex": 3,
    "explanationVi": "So sánh nhất với trạng từ kết thúc \"-ly\": the most + adv.",
    "sentenceVi": "Anh ấy lái xe cẩn thận nhất trong số bạn bè tôi.",
    "vocabNotes": [
      {
        "word": "carefully",
        "pos": "trạng từ",
        "vi": "cẩn thận"
      }
    ]
  },
  {
    "id": "E3-bulk-023",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "same-as"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My computer is ___ as yours.",
    "options": [
      "the same",
      "equal",
      "same",
      "alike"
    ],
    "answerIndex": 0,
    "explanationVi": "Cấu trúc \"the same (N) as\" để so sánh đồng nhất.",
    "sentenceVi": "Máy tính của tôi giống như của bạn.",
    "vocabNotes": [
      {
        "word": "computer",
        "pos": "danh từ",
        "vi": "máy tính"
      }
    ]
  },
  {
    "id": "E3-bulk-024",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "different-from"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This product is significantly ___ from its competitors.",
    "options": [
      "different",
      "differ",
      "differently",
      "differing"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Different from\" = khác với. \"Different\" là tính từ.",
    "sentenceVi": "Sản phẩm này khác biệt đáng kể so với các đối thủ.",
    "vocabNotes": [
      {
        "word": "different",
        "pos": "tính từ",
        "vi": "khác"
      },
      {
        "word": "competitor",
        "pos": "danh từ",
        "vi": "đối thủ"
      }
    ]
  },
  {
    "id": "E3-bulk-025",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "comparative-than-any"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This algorithm is faster than ___ in the market.",
    "options": [
      "all other",
      "any other",
      "any others",
      "other any"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Comparative + than + any other + N (số ít)\" để so sánh với mọi đối tượng khác.",
    "sentenceVi": "Thuật toán này nhanh hơn bất kỳ thuật toán nào khác trên thị trường.",
    "vocabNotes": [
      {
        "word": "algorithm",
        "pos": "danh từ",
        "vi": "thuật toán"
      },
      {
        "word": "market",
        "pos": "danh từ",
        "vi": "thị trường"
      }
    ]
  },
  {
    "id": "E3-bulk-026",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "not-so-as"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The exam wasn't ___ as I had expected.",
    "options": [
      "so hard",
      "more hard",
      "as harder",
      "hardly"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Not so + adj + as\" cũng dùng được như \"not as + adj + as\" (= không bằng).",
    "sentenceVi": "Kỳ thi không khó như tôi đã mong đợi.",
    "vocabNotes": [
      {
        "word": "expect",
        "pos": "động từ",
        "vi": "mong đợi"
      }
    ]
  },
  {
    "id": "E3-bulk-027",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "far-vs-farther-further"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Please contact us if you need ___ information.",
    "options": [
      "farther",
      "further",
      "more far",
      "most far"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Further\" cho ý trừu tượng (thêm thông tin). \"Farther\" cho khoảng cách vật lý.",
    "sentenceVi": "Vui lòng liên hệ chúng tôi nếu bạn cần thêm thông tin.",
    "vocabNotes": [
      {
        "word": "further",
        "pos": "tính từ",
        "vi": "thêm / xa hơn"
      }
    ]
  },
  {
    "id": "E3-bulk-028",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "superlative-in-place"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He is the most experienced engineer ___ the company.",
    "options": [
      "of",
      "in",
      "at",
      "by"
    ],
    "answerIndex": 1,
    "explanationVi": "So sánh nhất + in + nơi chốn (in the company, in the world).",
    "sentenceVi": "Anh ấy là kỹ sư giàu kinh nghiệm nhất trong công ty.",
    "vocabNotes": [
      {
        "word": "experienced",
        "pos": "tính từ",
        "vi": "giàu kinh nghiệm"
      },
      {
        "word": "engineer",
        "pos": "danh từ",
        "vi": "kỹ sư"
      }
    ]
  },
  {
    "id": "E3-bulk-029",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "superlative-of-group"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He is the youngest ___ the four siblings.",
    "options": [
      "of",
      "in",
      "at",
      "among"
    ],
    "answerIndex": 0,
    "explanationVi": "So sánh nhất + of + nhóm xác định (of the four siblings).",
    "sentenceVi": "Anh ấy là người trẻ nhất trong 4 anh chị em.",
    "vocabNotes": [
      {
        "word": "sibling",
        "pos": "danh từ",
        "vi": "anh chị em"
      }
    ]
  },
  {
    "id": "E3-bulk-030",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "ever-with-superlative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This is the most memorable trip ___ I have ever taken.",
    "options": [
      "which",
      "that",
      "what",
      "where"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau so sánh nhất + danh từ, dùng \"that\" cho mệnh đề quan hệ (không dùng \"which\").",
    "sentenceVi": "Đây là chuyến đi đáng nhớ nhất mà tôi từng có.",
    "vocabNotes": [
      {
        "word": "memorable",
        "pos": "tính từ",
        "vi": "đáng nhớ"
      },
      {
        "word": "trip",
        "pos": "danh từ",
        "vi": "chuyến đi"
      }
    ]
  },
  {
    "id": "E3-bulk-031",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "comparative-vs-positive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Of the two laptops, this one is ___.",
    "options": [
      "fast",
      "faster",
      "fastest",
      "more fast"
    ],
    "answerIndex": 1,
    "explanationVi": "Khi so sánh 2 đối tượng dùng so sánh hơn (faster), không phải so sánh nhất.",
    "sentenceVi": "Trong 2 chiếc laptop, cái này nhanh hơn.",
    "vocabNotes": [
      {
        "word": "laptop",
        "pos": "danh từ",
        "vi": "laptop"
      }
    ]
  },
  {
    "id": "E3-bulk-032",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "prefer-to"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I prefer tea ___ coffee.",
    "options": [
      "than",
      "to",
      "over",
      "with"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Prefer X to Y\" = thích X hơn Y.",
    "sentenceVi": "Tôi thích trà hơn cà phê.",
    "vocabNotes": [
      {
        "word": "prefer",
        "pos": "động từ",
        "vi": "thích hơn"
      }
    ]
  },
  {
    "id": "E3-bulk-033",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "would-rather-than"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I would rather walk ___ take a taxi in this rain.",
    "options": [
      "to",
      "than",
      "over",
      "instead of"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Would rather + V + than + V\" = thà ... còn hơn ...",
    "sentenceVi": "Tôi thà đi bộ còn hơn bắt taxi trong cơn mưa này.",
    "vocabNotes": [
      {
        "word": "rain",
        "pos": "danh từ",
        "vi": "cơn mưa"
      }
    ]
  },
  {
    "id": "E3-bulk-034",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "comparative-adverb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She can speak English ___ than her colleagues.",
    "options": [
      "fluently",
      "more fluently",
      "most fluently",
      "fluent"
    ],
    "answerIndex": 1,
    "explanationVi": "So sánh hơn của trạng từ kết thúc \"-ly\": more + adv.",
    "sentenceVi": "Cô ấy có thể nói tiếng Anh trôi chảy hơn các đồng nghiệp.",
    "vocabNotes": [
      {
        "word": "fluently",
        "pos": "trạng từ",
        "vi": "trôi chảy"
      },
      {
        "word": "colleague",
        "pos": "danh từ",
        "vi": "đồng nghiệp"
      }
    ]
  },
  {
    "id": "E3-bulk-035",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "superlative-with-relative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This is the best book ___ I have read this year.",
    "options": [
      "which",
      "that",
      "what",
      "whom"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau so sánh nhất, dùng \"that\" làm đại từ quan hệ. \"Which\" không phổ biến trong trường hợp này.",
    "sentenceVi": "Đây là quyển sách hay nhất mà tôi đã đọc năm nay.",
    "vocabNotes": [
      {
        "word": "book",
        "pos": "danh từ",
        "vi": "quyển sách"
      }
    ]
  },
  {
    "id": "E3-bulk-036",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "more-vs-most-with-and"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "His presentations are becoming ___ as he gains experience.",
    "options": [
      "impressiver",
      "more impressive",
      "more and more impressive",
      "most impressive"
    ],
    "answerIndex": 2,
    "explanationVi": "\"More and more + adj\" diễn tả sự tăng dần đối với tính từ dài.",
    "sentenceVi": "Các bài thuyết trình của anh ấy ngày càng ấn tượng hơn khi anh ấy có thêm kinh nghiệm.",
    "vocabNotes": [
      {
        "word": "presentation",
        "pos": "danh từ",
        "vi": "bài thuyết trình"
      },
      {
        "word": "impressive",
        "pos": "tính từ",
        "vi": "ấn tượng"
      }
    ]
  },
  {
    "id": "E3-bulk-037",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "comparison",
      "absolute-no-comparison"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This is a ___ solution; nothing better could be designed.",
    "options": [
      "perfecter",
      "more perfect",
      "perfect",
      "most perfect"
    ],
    "answerIndex": 2,
    "explanationVi": "Tính từ tuyệt đối (perfect, unique) thường không có dạng so sánh hơn / nhất.",
    "sentenceVi": "Đây là giải pháp hoàn hảo; không thể thiết kế gì tốt hơn.",
    "vocabNotes": [
      {
        "word": "perfect",
        "pos": "tính từ",
        "vi": "hoàn hảo"
      },
      {
        "word": "design",
        "pos": "động từ",
        "vi": "thiết kế"
      }
    ]
  },
  {
    "id": "E3-bulk-038",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "comparison-with-noun"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My experience in marketing is ___ than yours.",
    "options": [
      "greater",
      "more great",
      "greatest",
      "biggest"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Greater\" là so sánh hơn của \"great\" (lớn / đáng kể).",
    "sentenceVi": "Kinh nghiệm marketing của tôi nhiều hơn của bạn.",
    "vocabNotes": [
      {
        "word": "experience",
        "pos": "danh từ",
        "vi": "kinh nghiệm"
      }
    ]
  },
  {
    "id": "E3-bulk-039",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "irregular-many-much-more"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Our team has ___ resources than last year.",
    "options": [
      "more",
      "most",
      "most of",
      "more of"
    ],
    "answerIndex": 0,
    "explanationVi": "So sánh hơn của \"many/much\" là \"more\" (bất quy tắc).",
    "sentenceVi": "Đội chúng tôi có nhiều nguồn lực hơn năm ngoái.",
    "vocabNotes": [
      {
        "word": "resource",
        "pos": "danh từ",
        "vi": "nguồn lực"
      }
    ]
  },
  {
    "id": "E3-bulk-040",
    "topicId": "E3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "comparison",
      "old-vs-eldest"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He is the ___ of the three brothers.",
    "options": [
      "older",
      "elder",
      "oldest",
      "eldest"
    ],
    "answerIndex": 3,
    "explanationVi": "\"Eldest\" so sánh nhất trong thứ bậc gia đình. \"Oldest\" cho so sánh tuổi nói chung.",
    "sentenceVi": "Anh ấy là người lớn nhất trong 3 anh em.",
    "vocabNotes": [
      {
        "word": "eldest",
        "pos": "tính từ",
        "vi": "lớn nhất (trong gia đình)"
      }
    ]
  }
];
