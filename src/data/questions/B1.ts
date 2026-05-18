import type { Question } from "@/types";

// Topic B1 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "B1-gen01",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "plural-nouns",
      "spelling-rules"
    ],
    "prompt": "Chọn đáp án đúng để hoàn thành câu sau:",
    "sentence": "The office manager ordered ten new ___ for the marketing department.",
    "options": [
      "desk",
      "desks",
      "deskes",
      "desksies"
    ],
    "answerIndex": 1,
    "explanationVi": "Vì có số đếm 'ten' nên ta cần danh từ số nhiều. 'Desk' là danh từ thường, ta chỉ cần thêm đuôi '-s'.",
    "sentenceVi": "Quản lý văn phòng đã đặt mua mười chiếc bàn mới cho phòng marketing.",
    "vocabNotes": [
      {
        "word": "office manager",
        "pos": "danh từ",
        "vi": "quản lý văn phòng"
      },
      {
        "word": "ordered",
        "pos": "động từ",
        "vi": "đặt mua"
      },
      {
        "word": "desks",
        "pos": "danh từ",
        "vi": "bàn làm việc"
      },
      {
        "word": "marketing department",
        "pos": "cụm từ",
        "vi": "phòng marketing"
      }
    ]
  },
  {
    "id": "B1-gen02",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "irregular-plural"
    ],
    "prompt": "Điền dạng số nhiều của từ trong ngoặc (child):",
    "sentence": "The company organizes a special event for the employees' ___ every summer.",
    "explanationVi": "'Child' là danh từ bất quy tắc, dạng số nhiều của nó là 'children'.",
    "sentenceVi": "Công ty tổ chức một sự kiện đặc biệt cho con cái của nhân viên vào mỗi mùa hè.",
    "vocabNotes": [
      {
        "word": "organizes",
        "pos": "động từ",
        "vi": "tổ chức"
      },
      {
        "word": "special",
        "pos": "tính từ",
        "vi": "đặc biệt"
      },
      {
        "word": "event",
        "pos": "danh từ",
        "vi": "sự kiện"
      },
      {
        "word": "employees'",
        "pos": "danh từ",
        "vi": "của nhân viên"
      },
      {
        "word": "children",
        "pos": "danh từ",
        "vi": "con cái"
      },
      {
        "word": "every summer",
        "pos": "cụm từ",
        "vi": "mỗi mùa hè"
      }
    ],
    "options": [
      "guests",
      "parents",
      "children",
      "spouses"
    ],
    "answerIndex": 2
  },
  {
    "id": "B1-gen03",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-nouns"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We need to buy some new ___ for the conference room.",
    "options": [
      "furniture",
      "furnitures",
      "a furniture",
      "furnituring"
    ],
    "answerIndex": 0,
    "explanationVi": "'Furniture' (nội thất) là danh từ không đếm được, nên không có dạng số nhiều thêm 's' và không đi với 'a'.",
    "sentenceVi": "Chúng ta cần mua một số đồ nội thất mới cho phòng hội nghị.",
    "vocabNotes": [
      {
        "word": "need",
        "pos": "động từ",
        "vi": "cần"
      },
      {
        "word": "buy",
        "pos": "động từ",
        "vi": "mua"
      },
      {
        "word": "furniture",
        "pos": "danh từ",
        "vi": "đồ nội thất"
      },
      {
        "word": "conference room",
        "pos": "cụm từ",
        "vi": "phòng hội nghị"
      }
    ]
  },
  {
    "id": "B1-gen04",
    "topicId": "B1",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "plural-only-nouns"
    ],
    "prompt": "Sắp xếp các từ sau thành câu hoàn chỉnh:",
    "tiles": [
      "She",
      "bought",
      "a",
      "new",
      "pair",
      "of",
      "sunglasses"
    ],
    "answer": "She bought a new pair of sunglasses",
    "explanationVi": "Với các danh từ có hai bộ phận như 'sunglasses', ta sử dụng cụm 'a pair of' để chỉ số lượng.",
    "sentenceVi": "Cô ấy đã mua một cặp kính râm mới.",
    "vocabNotes": [
      {
        "word": "bought",
        "pos": "động từ",
        "vi": "đã mua"
      },
      {
        "word": "pair",
        "pos": "danh từ",
        "vi": "cặp"
      },
      {
        "word": "sunglasses",
        "pos": "danh từ",
        "vi": "kính râm"
      }
    ]
  },
  {
    "id": "B1-gen05",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "uncountable-nouns-s-ending"
    ],
    "prompt": "Chọn đáp án đúng về mặt ngữ pháp:",
    "sentence": "The latest ___ about the merger was announced this morning.",
    "options": [
      "news",
      "newses",
      "new",
      "a news"
    ],
    "answerIndex": 0,
    "explanationVi": "'News' (tin tức) là danh từ không đếm được mặc dù có đuôi 's', do đó không dùng 'a' hay thêm 'es'.",
    "sentenceVi": "Tin tức mới nhất về vụ sáp nhập đã được công bố sáng nay.",
    "vocabNotes": [
      {
        "word": "latest",
        "pos": "tính từ",
        "vi": "mới nhất"
      },
      {
        "word": "news",
        "pos": "danh từ",
        "vi": "tin tức"
      },
      {
        "word": "merger",
        "pos": "danh từ",
        "vi": "vụ sáp nhập"
      },
      {
        "word": "announced",
        "pos": "động từ",
        "vi": "công bố"
      },
      {
        "word": "this morning",
        "pos": "cụm từ",
        "vi": "sáng nay"
      }
    ]
  },
  {
    "id": "B1-gen06",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "collective-nouns"
    ],
    "prompt": "Điền động từ 'to be' (is/are) phù hợp vào chỗ trống:",
    "sentence": "The committee ___ still debating the new budget proposal.",
    "explanationVi": "Với danh từ tập hợp như 'committee', ta có thể dùng 'is' nếu coi là một nhóm thống nhất hoặc 'are' nếu nhấn mạnh từng thành viên.",
    "sentenceVi": "Ủy ban vẫn đang tranh luận về đề xuất ngân sách mới.",
    "vocabNotes": [
      {
        "word": "committee",
        "pos": "danh từ",
        "vi": "ủy ban"
      },
      {
        "word": "still",
        "pos": "trạng từ",
        "vi": "vẫn"
      },
      {
        "word": "debating",
        "pos": "động từ",
        "vi": "tranh luận"
      },
      {
        "word": "budget",
        "pos": "danh từ",
        "vi": "ngân sách"
      },
      {
        "word": "proposal",
        "pos": "danh từ",
        "vi": "đề xuất"
      }
    ],
    "options": [
      "were",
      "are",
      "is",
      "was"
    ],
    "answerIndex": 2
  },
  {
    "id": "B1-gen07",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "special-nouns"
    ],
    "prompt": "Chọn từ phù hợp để hoàn thành câu:",
    "sentence": "Bicycles are an environmentally friendly ___ of transport.",
    "options": [
      "mean",
      "means",
      "meanses",
      "meaning"
    ],
    "answerIndex": 1,
    "explanationVi": "'Means' (cách thức/phương tiện) là từ có dạng số ít và số nhiều như nhau, luôn có đuôi 's'.",
    "sentenceVi": "Xe đạp là một phương tiện giao thông thân thiện với môi trường.",
    "vocabNotes": [
      {
        "word": "Bicycles",
        "pos": "danh từ",
        "vi": "xe đạp"
      },
      {
        "word": "environmentally friendly",
        "pos": "tính từ",
        "vi": "thân thiện môi trường"
      },
      {
        "word": "means",
        "pos": "danh từ",
        "vi": "phương tiện"
      },
      {
        "word": "transport",
        "pos": "danh từ",
        "vi": "giao thông"
      }
    ]
  },
  {
    "id": "B1-gen08",
    "topicId": "B1",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "uncountable-nouns"
    ],
    "prompt": "Sắp xếp các từ thành câu đúng:",
    "tiles": [
      "The",
      "weather",
      "was",
      "terrible",
      "during",
      "our",
      "trip"
    ],
    "answer": "The weather was terrible during our trip",
    "explanationVi": "'Weather' là danh từ không đếm được, không đi kèm với mạo từ 'a/an'.",
    "sentenceVi": "Thời tiết rất tệ trong chuyến đi của chúng tôi.",
    "vocabNotes": [
      {
        "word": "weather",
        "pos": "danh từ",
        "vi": "thời tiết"
      },
      {
        "word": "terrible",
        "pos": "tính từ",
        "vi": "tệ"
      },
      {
        "word": "during",
        "pos": "giới từ",
        "vi": "trong suốt"
      },
      {
        "word": "trip",
        "pos": "danh từ",
        "vi": "chuyến đi"
      }
    ]
  },
  {
    "id": "B1-gen09",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "plural-only-nouns"
    ],
    "prompt": "Chọn từ đúng:",
    "sentence": "Please keep all your personal ___ in the locker provided.",
    "options": [
      "belong",
      "belonging",
      "belongings",
      "belonged"
    ],
    "answerIndex": 2,
    "explanationVi": "'Belongings' (đồ dùng cá nhân) là danh từ luôn ở dạng số nhiều.",
    "sentenceVi": "Vui lòng giữ tất cả đồ dùng cá nhân của bạn trong tủ khóa được cung cấp.",
    "vocabNotes": [
      {
        "word": "keep",
        "pos": "động từ",
        "vi": "giữ"
      },
      {
        "word": "personal",
        "pos": "tính từ",
        "vi": "cá nhân"
      },
      {
        "word": "belongings",
        "pos": "danh từ",
        "vi": "đồ dùng cá nhân"
      },
      {
        "word": "locker",
        "pos": "danh từ",
        "vi": "tủ khóa"
      },
      {
        "word": "provided",
        "pos": "động từ",
        "vi": "được cung cấp"
      }
    ]
  },
  {
    "id": "B1-gen10",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "plural-nouns",
      "spelling-rules"
    ],
    "prompt": "Điền dạng số nhiều của từ trong ngoặc (city):",
    "sentence": "They have opened new branches in several major ___ across the country.",
    "explanationVi": "Danh từ kết thúc bằng phụ âm + 'y', khi chuyển sang số nhiều ta bỏ 'y' và thêm 'ies'.",
    "sentenceVi": "Họ đã mở các chi nhánh mới ở một số thành phố lớn trên khắp cả nước.",
    "vocabNotes": [
      {
        "word": "opened",
        "pos": "động từ",
        "vi": "đã mở"
      },
      {
        "word": "branches",
        "pos": "danh từ",
        "vi": "chi nhánh"
      },
      {
        "word": "several",
        "pos": "tính từ",
        "vi": "một vài"
      },
      {
        "word": "major",
        "pos": "tính từ",
        "vi": "lớn"
      },
      {
        "word": "cities",
        "pos": "danh từ",
        "vi": "thành phố"
      },
      {
        "word": "across the country",
        "pos": "cụm từ",
        "vi": "khắp cả nước"
      }
    ],
    "options": [
      "districts",
      "regions",
      "cities",
      "towns"
    ],
    "answerIndex": 2
  },
  {
    "id": "B1-bulk-001",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "countable-nouns",
      "plural-forms",
      "daily-life"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My younger sister has collected many interesting ___ from her trips abroad.",
    "options": [
      "book",
      "books",
      "book's",
      "booking"
    ],
    "answerIndex": 1,
    "explanationVi": "Danh từ đếm được \"book\" (sách) ở dạng số nhiều là \"books\". Câu này dùng \"many\" (nhiều) nên cần danh từ số nhiều.",
    "sentenceVi": "Em gái tôi đã sưu tầm nhiều cuốn sách thú vị từ những chuyến đi nước ngoài của mình.",
    "vocabNotes": [
      {
        "word": "collected",
        "pos": "động từ",
        "vi": "sưu tầm"
      },
      {
        "word": "interesting",
        "pos": "tính từ",
        "vi": "thú vị"
      },
      {
        "word": "trips abroad",
        "pos": "cụm từ",
        "vi": "những chuyến đi nước ngoài"
      }
    ]
  },
  {
    "id": "B1-bulk-002",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-nouns",
      "business",
      "academic"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new employee was given valuable ___ on how to navigate the company's complex internal system.",
    "options": [
      "an advice",
      "advices",
      "advice",
      "some advices"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ \"advice\" (lời khuyên) là danh từ không đếm được, không có dạng số nhiều và không dùng với mạo từ \"a/an\".",
    "sentenceVi": "Nhân viên mới đã nhận được những lời khuyên giá trị về cách điều hướng hệ thống nội bộ phức tạp của công ty.",
    "vocabNotes": [
      {
        "word": "valuable",
        "pos": "tính từ",
        "vi": "giá trị"
      },
      {
        "word": "navigate",
        "pos": "động từ",
        "vi": "điều hướng"
      },
      {
        "word": "complex",
        "pos": "tính từ",
        "vi": "phức tạp"
      },
      {
        "word": "internal system",
        "pos": "cụm từ",
        "vi": "hệ thống nội bộ"
      }
    ]
  },
  {
    "id": "B1-bulk-003",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "irregular-plurals",
      "health",
      "daily-life"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Regular exercise helps to strengthen your ___ and improve overall mobility.",
    "options": [
      "foot",
      "foots",
      "feet",
      "feets"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ bất quy tắc \"foot\" (bàn chân) có dạng số nhiều là \"feet\".",
    "sentenceVi": "Tập thể dục thường xuyên giúp tăng cường đôi chân của bạn và cải thiện khả năng vận động tổng thể.",
    "vocabNotes": [
      {
        "word": "regular exercise",
        "pos": "cụm từ",
        "vi": "tập thể dục thường xuyên"
      },
      {
        "word": "strengthen",
        "pos": "động từ",
        "vi": "tăng cường"
      },
      {
        "word": "mobility",
        "pos": "danh từ",
        "vi": "khả năng vận động"
      },
      {
        "word": "overall",
        "pos": "tính từ",
        "vi": "tổng thể"
      }
    ]
  },
  {
    "id": "B1-bulk-004",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "countable-nouns",
      "singular-plural",
      "entertainment",
      "academic"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This television ___ focuses on historical events from the 18th century.",
    "options": [
      "series",
      "serie",
      "series'",
      "serieses"
    ],
    "answerIndex": 0,
    "explanationVi": "Danh từ \"series\" (loạt phim/chương trình) có thể dùng ở dạng số ít hoặc số nhiều với cùng một hình thức. Trong câu này, \"This\" cho thấy nó là số ít.",
    "sentenceVi": "Loạt chương trình truyền hình này tập trung vào các sự kiện lịch sử từ thế kỷ 18.",
    "vocabNotes": [
      {
        "word": "television series",
        "pos": "cụm từ",
        "vi": "loạt chương trình truyền hình"
      },
      {
        "word": "focuses on",
        "pos": "cụm từ",
        "vi": "tập trung vào"
      },
      {
        "word": "historical events",
        "pos": "cụm từ",
        "vi": "các sự kiện lịch sử"
      },
      {
        "word": "18th century",
        "pos": "cụm từ",
        "vi": "thế kỷ 18"
      }
    ]
  },
  {
    "id": "B1-bulk-005",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "always-plural-nouns",
      "daily-life"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My ___ are still in the washing machine, so I can't get dressed yet.",
    "options": [
      "cloth",
      "clothing",
      "clothes",
      "clothe"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ \"clothes\" (quần áo) luôn ở dạng số nhiều và đi với động từ số nhiều (\"are\").",
    "sentenceVi": "Quần áo của tôi vẫn còn trong máy giặt, nên tôi chưa thể mặc đồ được.",
    "vocabNotes": [
      {
        "word": "washing machine",
        "pos": "danh từ",
        "vi": "máy giặt"
      },
      {
        "word": "get dressed",
        "pos": "cụm từ",
        "vi": "mặc quần áo"
      },
      {
        "word": "yet",
        "pos": "trạng từ",
        "vi": "chưa"
      }
    ]
  },
  {
    "id": "B1-bulk-006",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "collective-nouns",
      "verb-agreement",
      "business"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The company's staff ___ actively participating in the annual team-building event.",
    "options": [
      "is",
      "was",
      "are",
      "be"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ tập hợp \"staff\" (nhân viên) có thể dùng với động từ số ít hoặc số nhiều. Trong ngữ cảnh này, \"actively participating\" (tích cực tham gia) ngụ ý các cá nhân trong nhóm đang hành động riêng lẻ, do đó dùng động từ số nhiều \"are\" là phù hợp.",
    "sentenceVi": "Đội ngũ nhân viên của công ty đang tích cực tham gia vào sự kiện xây dựng đội nhóm hàng năm.",
    "vocabNotes": [
      {
        "word": "staff",
        "pos": "danh từ",
        "vi": "nhân viên, đội ngũ"
      },
      {
        "word": "actively",
        "pos": "trạng từ",
        "vi": "tích cực"
      },
      {
        "word": "participating",
        "pos": "động từ",
        "vi": "tham gia"
      },
      {
        "word": "annual",
        "pos": "tính từ",
        "vi": "hàng năm"
      },
      {
        "word": "team-building event",
        "pos": "cụm từ",
        "vi": "sự kiện xây dựng đội nhóm"
      }
    ]
  },
  {
    "id": "B1-bulk-007",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "pluralization-rules",
      "countable-nouns",
      "daily-life"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The chef carefully sharpened his ___ before preparing the intricate meal.",
    "options": [
      "knifes",
      "knife",
      "knives",
      "knive"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ đếm được \"knife\" (con dao) tận cùng bằng \"-fe\" có dạng số nhiều là \"knives\" (bỏ \"-fe\" thêm \"-ves\"). \"His\" ở đây chỉ số nhiều vì một đầu bếp thường dùng nhiều dao.",
    "sentenceVi": "Đầu bếp cẩn thận mài sắc những con dao của mình trước khi chuẩn bị bữa ăn cầu kỳ.",
    "vocabNotes": [
      {
        "word": "chef",
        "pos": "danh từ",
        "vi": "đầu bếp"
      },
      {
        "word": "carefully",
        "pos": "trạng từ",
        "vi": "cẩn thận"
      },
      {
        "word": "sharpened",
        "pos": "động từ",
        "vi": "mài sắc"
      },
      {
        "word": "preparing",
        "pos": "động từ",
        "vi": "chuẩn bị"
      },
      {
        "word": "intricate meal",
        "pos": "cụm từ",
        "vi": "bữa ăn cầu kỳ"
      }
    ]
  },
  {
    "id": "B1-bulk-008",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-nouns",
      "business",
      "travel"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Please provide some more ___ regarding your travel plans for next week.",
    "options": [
      "informations",
      "information",
      "an information",
      "a information"
    ],
    "answerIndex": 1,
    "explanationVi": "Danh từ \"information\" (thông tin) là danh từ không đếm được, không có dạng số nhiều và không dùng với mạo từ \"a/an\".",
    "sentenceVi": "Vui lòng cung cấp thêm thông tin về kế hoạch du lịch của bạn cho tuần tới.",
    "vocabNotes": [
      {
        "word": "provide",
        "pos": "động từ",
        "vi": "cung cấp"
      },
      {
        "word": "regarding",
        "pos": "giới từ",
        "vi": "liên quan đến"
      },
      {
        "word": "travel plans",
        "pos": "cụm từ",
        "vi": "kế hoạch du lịch"
      }
    ]
  },
  {
    "id": "B1-bulk-009",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-nouns",
      "business",
      "project-management"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The team made significant ___ on the project after the new strategy was implemented.",
    "options": [
      "progresses",
      "a progress",
      "progress",
      "some progresses"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ \"progress\" (tiến độ/tiến triển) là danh từ không đếm được, không có dạng số nhiều và không dùng với mạo từ \"a/an\".",
    "sentenceVi": "Đội đã đạt được tiến bộ đáng kể trong dự án sau khi chiến lược mới được triển khai.",
    "vocabNotes": [
      {
        "word": "significant",
        "pos": "tính từ",
        "vi": "đáng kể"
      },
      {
        "word": "project",
        "pos": "danh từ",
        "vi": "dự án"
      },
      {
        "word": "strategy",
        "pos": "danh từ",
        "vi": "chiến lược"
      },
      {
        "word": "implemented",
        "pos": "động từ",
        "vi": "triển khai"
      }
    ]
  },
  {
    "id": "B1-bulk-010",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "uncountable-nouns",
      "ending-in-s",
      "sports",
      "academic"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "While often challenging, ___ requires immense strength and flexibility.",
    "options": [
      "gymnastic",
      "gymnastics",
      "a gymnastic",
      "gymnastic's"
    ],
    "answerIndex": 1,
    "explanationVi": "Môn thể thao \"gymnastics\" (thể dục dụng cụ) là một danh từ không đếm được, luôn kết thúc bằng \"-s\" nhưng đi với động từ số ít (\"requires\").",
    "sentenceVi": "Dù thường đầy thử thách, thể dục dụng cụ đòi hỏi sức mạnh và sự linh hoạt lớn.",
    "vocabNotes": [
      {
        "word": "challenging",
        "pos": "tính từ",
        "vi": "đầy thử thách"
      },
      {
        "word": "requires",
        "pos": "động từ",
        "vi": "đòi hỏi"
      },
      {
        "word": "immense",
        "pos": "tính từ",
        "vi": "lớn, bao la"
      },
      {
        "word": "strength",
        "pos": "danh từ",
        "vi": "sức mạnh"
      },
      {
        "word": "flexibility",
        "pos": "danh từ",
        "vi": "sự linh hoạt"
      }
    ]
  },
  {
    "id": "B1-bulk-011",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "countable-nouns",
      "irregular-plural"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The kindergarten teacher always ensures that all the ___ are engaged in learning activities.",
    "options": [
      "child",
      "childs",
      "children",
      "childrens"
    ],
    "answerIndex": 2,
    "explanationVi": "Từ 'child' (đứa trẻ) có dạng số nhiều bất quy tắc là 'children'. Trong câu này, cần danh từ số nhiều để phù hợp với động từ 'are engaged'.",
    "sentenceVi": "Cô giáo mẫu giáo luôn đảm bảo rằng tất cả các em nhỏ đều tham gia vào các hoạt động học tập.",
    "vocabNotes": [
      {
        "word": "kindergarten",
        "pos": "danh từ",
        "vi": "trường mẫu giáo"
      },
      {
        "word": "ensures",
        "pos": "động từ",
        "vi": "đảm bảo"
      },
      {
        "word": "engaged in",
        "pos": "cụm từ",
        "vi": "tham gia vào"
      },
      {
        "word": "learning activities",
        "pos": "cụm từ",
        "vi": "các hoạt động học tập"
      }
    ]
  },
  {
    "id": "B1-bulk-012",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-nouns",
      "quantifiers"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "There was a significant ___ of traffic on the highway this morning, causing delays.",
    "options": [
      "number",
      "amount",
      "many",
      "few"
    ],
    "answerIndex": 1,
    "explanationVi": "Danh từ 'traffic' (giao thông) là danh từ không đếm được. Để diễn tả số lượng của danh từ không đếm được, chúng ta dùng 'amount of' thay vì 'number of'.",
    "sentenceVi": "Sáng nay có một lượng giao thông đáng kể trên đường cao tốc, gây ra sự chậm trễ.",
    "vocabNotes": [
      {
        "word": "significant",
        "pos": "tính từ",
        "vi": "đáng kể"
      },
      {
        "word": "traffic",
        "pos": "danh từ",
        "vi": "giao thông"
      },
      {
        "word": "highway",
        "pos": "danh từ",
        "vi": "đường cao tốc"
      },
      {
        "word": "causing",
        "pos": "động từ",
        "vi": "gây ra"
      },
      {
        "word": "delays",
        "pos": "danh từ",
        "vi": "sự chậm trễ"
      }
    ]
  },
  {
    "id": "B1-bulk-013",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "countable-nouns",
      "pluralization"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Many small businesses are offering new ___ to attract customers during the holiday season.",
    "options": [
      "service",
      "services",
      "a service",
      "some service"
    ],
    "answerIndex": 1,
    "explanationVi": "Danh từ 'service' (dịch vụ) là danh từ đếm được. Trong ngữ cảnh này, các doanh nghiệp thường cung cấp nhiều 'dịch vụ' khác nhau, nên cần dùng dạng số nhiều 'services'.",
    "sentenceVi": "Nhiều doanh nghiệp nhỏ đang cung cấp các dịch vụ mới để thu hút khách hàng trong mùa lễ hội.",
    "vocabNotes": [
      {
        "word": "businesses",
        "pos": "danh từ",
        "vi": "doanh nghiệp"
      },
      {
        "word": "offering",
        "pos": "động từ",
        "vi": "cung cấp"
      },
      {
        "word": "attract",
        "pos": "động từ",
        "vi": "thu hút"
      },
      {
        "word": "customers",
        "pos": "danh từ",
        "vi": "khách hàng"
      },
      {
        "word": "holiday season",
        "pos": "cụm từ",
        "vi": "mùa lễ hội"
      }
    ]
  },
  {
    "id": "B1-bulk-014",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-nouns"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Passengers are advised to keep their ___ with them at all times during the journey.",
    "options": [
      "luggage",
      "luggages",
      "a luggage",
      "some luggages"
    ],
    "answerIndex": 0,
    "explanationVi": "Danh từ 'luggage' (hành lý) là danh từ không đếm được và luôn ở dạng số ít. Do đó, không thêm '-s' và không dùng mạo từ 'a/an'.",
    "sentenceVi": "Hành khách được khuyến cáo giữ hành lý của mình bên người mọi lúc trong suốt chuyến đi.",
    "vocabNotes": [
      {
        "word": "passengers",
        "pos": "danh từ",
        "vi": "hành khách"
      },
      {
        "word": "advised",
        "pos": "tính từ",
        "vi": "được khuyên"
      },
      {
        "word": "luggage",
        "pos": "danh từ",
        "vi": "hành lý"
      },
      {
        "word": "at all times",
        "pos": "cụm từ",
        "vi": "mọi lúc"
      },
      {
        "word": "journey",
        "pos": "danh từ",
        "vi": "chuyến đi"
      }
    ]
  },
  {
    "id": "B1-bulk-015",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "countable-nouns",
      "always-plural",
      "quantifiers"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She needs a new ___ of reading glasses because her old ones broke.",
    "options": [
      "pairs",
      "pair",
      "sets",
      "pack"
    ],
    "answerIndex": 1,
    "explanationVi": "Danh từ 'glasses' (kính mắt) là danh từ luôn ở dạng số nhiều. Để diễn tả số lượng của những vật có hai bộ phận như vậy, chúng ta dùng cụm 'a pair of'. Vì vậy, từ cần điền là 'pair'.",
    "sentenceVi": "Cô ấy cần một cặp kính đọc sách mới vì cái cũ của cô ấy đã bị hỏng.",
    "vocabNotes": [
      {
        "word": "needs",
        "pos": "động từ",
        "vi": "cần"
      },
      {
        "word": "reading glasses",
        "pos": "cụm từ",
        "vi": "kính đọc sách"
      },
      {
        "word": "broke",
        "pos": "động từ",
        "vi": "bị hỏng"
      },
      {
        "word": "old ones",
        "pos": "cụm từ",
        "vi": "cái cũ"
      }
    ]
  },
  {
    "id": "B1-bulk-016",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "countable-nouns",
      "collective-nouns",
      "subject-verb-agreement"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The company's management ___ currently reviewing the quarterly performance report.",
    "options": [
      "are",
      "were",
      "is",
      "have been"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ tập hợp 'management' (ban quản lý) có thể được coi là số ít khi nó được xem như một đơn vị duy nhất. Trong ngữ cảnh này, ban quản lý đang hoạt động như một nhóm thống nhất nên động từ chia ở dạng số ít 'is' là phù hợp.",
    "sentenceVi": "Ban quản lý của công ty hiện đang xem xét báo cáo hiệu suất hàng quý.",
    "vocabNotes": [
      {
        "word": "management",
        "pos": "danh từ",
        "vi": "ban quản lý"
      },
      {
        "word": "currently",
        "pos": "trạng từ",
        "vi": "hiện tại"
      },
      {
        "word": "reviewing",
        "pos": "động từ",
        "vi": "đang xem xét"
      },
      {
        "word": "quarterly",
        "pos": "tính từ",
        "vi": "hàng quý"
      },
      {
        "word": "performance report",
        "pos": "cụm từ",
        "vi": "báo cáo hiệu suất"
      }
    ]
  },
  {
    "id": "B1-bulk-017",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "uncountable-nouns",
      "ideas-experiences"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Students often seek ___ from their professors when preparing for their final projects.",
    "options": [
      "advice",
      "advices",
      "an advice",
      "some advices"
    ],
    "answerIndex": 0,
    "explanationVi": "Danh từ 'advice' (lời khuyên) là danh từ không đếm được và không có dạng số nhiều. Do đó, đáp án đúng là 'advice'.",
    "sentenceVi": "Sinh viên thường tìm kiếm lời khuyên từ các giáo sư của họ khi chuẩn bị cho các dự án cuối kỳ.",
    "vocabNotes": [
      {
        "word": "seek",
        "pos": "động từ",
        "vi": "tìm kiếm"
      },
      {
        "word": "professors",
        "pos": "danh từ",
        "vi": "giáo sư"
      },
      {
        "word": "preparing for",
        "pos": "cụm từ",
        "vi": "chuẩn bị cho"
      },
      {
        "word": "final projects",
        "pos": "cụm từ",
        "vi": "dự án cuối kỳ"
      }
    ]
  },
  {
    "id": "B1-bulk-018",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "countable-nouns",
      "pluralization-exceptions"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Many people still enjoy listening to music on their old ___ during long road trips.",
    "options": [
      "radio",
      "radios",
      "a radio",
      "some radio"
    ],
    "answerIndex": 1,
    "explanationVi": "Danh từ 'radio' kết thúc bằng -o nhưng là một ngoại lệ không thêm '-es' để tạo thành số nhiều mà chỉ thêm '-s'. Vì vậy, dạng số nhiều đúng là 'radios'.",
    "sentenceVi": "Nhiều người vẫn thích nghe nhạc trên những chiếc đài cũ của họ trong những chuyến đi đường dài.",
    "vocabNotes": [
      {
        "word": "enjoy listening",
        "pos": "cụm từ",
        "vi": "thích nghe"
      },
      {
        "word": "old radios",
        "pos": "cụm từ",
        "vi": "những chiếc đài cũ"
      },
      {
        "word": "during",
        "pos": "giới từ",
        "vi": "trong suốt"
      },
      {
        "word": "road trips",
        "pos": "cụm từ",
        "vi": "chuyến đi đường dài"
      }
    ]
  },
  {
    "id": "B1-bulk-019",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "uncountable-nouns",
      "singular-verb-agreement"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Despite its complexity, ___ has always fascinated scientists with its study of matter and energy.",
    "options": [
      "physic",
      "physics",
      "a physics",
      "some physics"
    ],
    "answerIndex": 1,
    "explanationVi": "Môn học 'physics' (vật lý) là danh từ không đếm được và luôn được coi là số ít, ngay cả khi kết thúc bằng '-s'. Vì vậy, nó đi với động từ số ít 'has'.",
    "sentenceVi": "Mặc dù phức tạp, vật lý luôn mê hoặc các nhà khoa học với việc nghiên cứu vật chất và năng lượng.",
    "vocabNotes": [
      {
        "word": "despite",
        "pos": "giới từ",
        "vi": "mặc dù"
      },
      {
        "word": "complexity",
        "pos": "danh từ",
        "vi": "sự phức tạp"
      },
      {
        "word": "fascinated",
        "pos": "động từ",
        "vi": "mê hoặc, cuốn hút"
      },
      {
        "word": "scientists",
        "pos": "danh từ",
        "vi": "các nhà khoa học"
      },
      {
        "word": "matter and energy",
        "pos": "cụm từ",
        "vi": "vật chất và năng lượng"
      }
    ]
  },
  {
    "id": "B1-bulk-020",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "countable-nouns",
      "always-plural"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "After years of hard work, her total ___ allowed her to purchase her dream home.",
    "options": [
      "earning",
      "earnings",
      "an earning",
      "some earning"
    ],
    "answerIndex": 1,
    "explanationVi": "Danh từ 'earnings' (tiền kiếm được, thu nhập) là danh từ luôn ở dạng số nhiều và không có dạng số ít. Vì vậy, đáp án đúng là 'earnings'.",
    "sentenceVi": "Sau nhiều năm làm việc chăm chỉ, tổng thu nhập của cô ấy đã giúp cô ấy mua được ngôi nhà mơ ước của mình.",
    "vocabNotes": [
      {
        "word": "hard work",
        "pos": "cụm từ",
        "vi": "làm việc chăm chỉ"
      },
      {
        "word": "earnings",
        "pos": "danh từ",
        "vi": "thu nhập"
      },
      {
        "word": "allowed",
        "pos": "động từ",
        "vi": "cho phép"
      },
      {
        "word": "purchase",
        "pos": "động từ",
        "vi": "mua"
      },
      {
        "word": "dream home",
        "pos": "cụm từ",
        "vi": "ngôi nhà mơ ước"
      }
    ]
  },
  {
    "id": "B1-bulk-021",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-noun",
      "quantifier"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "How ___ water do you drink in a day?",
    "options": [
      "many",
      "much",
      "few",
      "lot"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Water\" là danh từ không đếm được, đi với \"much\" trong câu hỏi về số lượng.",
    "sentenceVi": "Mỗi ngày bạn uống bao nhiêu nước?",
    "vocabNotes": [
      {
        "word": "water",
        "pos": "danh từ",
        "vi": "nước"
      }
    ]
  },
  {
    "id": "B1-bulk-022",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-noun",
      "little-few"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He has very ___ money left after the trip to Europe.",
    "options": [
      "few",
      "little",
      "many",
      "small"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Money\" là danh từ không đếm được, đi với \"little\" khi muốn nói \"rất ít\". \"Few\" chỉ dùng cho danh từ đếm được.",
    "sentenceVi": "Anh ấy còn rất ít tiền sau chuyến đi châu Âu.",
    "vocabNotes": [
      {
        "word": "money",
        "pos": "danh từ",
        "vi": "tiền"
      }
    ]
  },
  {
    "id": "B1-bulk-023",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "plural-only-noun",
      "police"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The police ___ investigating the incident in the building.",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Police\" luôn đi với động từ số nhiều (are/were/have). Không có dạng \"a police\".",
    "sentenceVi": "Cảnh sát đang điều tra sự cố ở toà nhà.",
    "vocabNotes": [
      {
        "word": "police",
        "pos": "danh từ",
        "vi": "cảnh sát"
      },
      {
        "word": "investigate",
        "pos": "động từ",
        "vi": "điều tra"
      }
    ]
  },
  {
    "id": "B1-bulk-024",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-noun",
      "homework"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The teacher gave us so ___ homework over the weekend.",
    "options": [
      "many",
      "much",
      "few",
      "lots"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Homework\" là danh từ không đếm được, dùng với \"much\". \"Lots\" cần có \"of\" theo sau.",
    "sentenceVi": "Giáo viên đã giao quá nhiều bài tập về nhà cho chúng tôi vào cuối tuần.",
    "vocabNotes": [
      {
        "word": "homework",
        "pos": "danh từ",
        "vi": "bài tập về nhà"
      }
    ]
  },
  {
    "id": "B1-bulk-025",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-noun",
      "luggage"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All passengers must check in their ___ at the airline counter.",
    "options": [
      "luggage",
      "luggages",
      "a luggage",
      "the luggages"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Luggage\" là danh từ không đếm được, không có dạng số nhiều \"luggages\" và không dùng \"a\".",
    "sentenceVi": "Tất cả hành khách phải làm thủ tục gửi hành lý tại quầy hãng bay.",
    "vocabNotes": [
      {
        "word": "luggage",
        "pos": "danh từ",
        "vi": "hành lý"
      },
      {
        "word": "check in",
        "pos": "cụm từ",
        "vi": "làm thủ tục"
      }
    ]
  },
  {
    "id": "B1-bulk-026",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-noun",
      "unit-noun"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He bought two ___ of paper for the office printer.",
    "options": [
      "sheets",
      "sheet",
      "papers",
      "pieces"
    ],
    "answerIndex": 0,
    "explanationVi": "Đếm \"paper\" (uncount) bằng đơn vị \"sheets of paper\" — số nhiều \"sheets\" vì có \"two\".",
    "sentenceVi": "Anh ấy đã mua hai tờ giấy cho máy in văn phòng.",
    "vocabNotes": [
      {
        "word": "sheet of paper",
        "pos": "cụm từ",
        "vi": "tờ giấy"
      },
      {
        "word": "printer",
        "pos": "danh từ",
        "vi": "máy in"
      }
    ]
  },
  {
    "id": "B1-bulk-027",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "uncountable-noun",
      "advice"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I'd like to give you ___ on managing your work-life balance.",
    "options": [
      "an advice",
      "some advice",
      "some advices",
      "advices"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Advice\" là danh từ không đếm được, không có dạng \"advices\" hay \"an advice\". Dùng \"some advice\" cho lượng không xác định.",
    "sentenceVi": "Tôi muốn cho bạn một vài lời khuyên về việc cân bằng công việc và cuộc sống.",
    "vocabNotes": [
      {
        "word": "advice",
        "pos": "danh từ",
        "vi": "lời khuyên"
      },
      {
        "word": "work-life balance",
        "pos": "cụm từ",
        "vi": "cân bằng công việc-cuộc sống"
      }
    ]
  },
  {
    "id": "B1-bulk-028",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "plural-only-noun",
      "jeans"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "These jeans ___ too tight for me to wear comfortably.",
    "options": [
      "is",
      "are",
      "be",
      "was"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Jeans\" luôn ở dạng số nhiều (chỉ vật có 2 phần) → động từ số nhiều \"are/were\".",
    "sentenceVi": "Chiếc quần jeans này quá chật để tôi mặc thoải mái.",
    "vocabNotes": [
      {
        "word": "jeans",
        "pos": "danh từ",
        "vi": "quần jeans"
      },
      {
        "word": "tight",
        "pos": "tính từ",
        "vi": "chật / bó sát"
      }
    ]
  },
  {
    "id": "B1-bulk-029",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "uncountable-noun",
      "news"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The latest news about the merger ___ surprising to everyone in the office.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answerIndex": 0,
    "explanationVi": "\"News\" tuy có chữ \"s\" nhưng là danh từ không đếm được, đi với động từ số ít \"is/was\".",
    "sentenceVi": "Tin tức mới nhất về vụ sáp nhập gây bất ngờ cho tất cả mọi người trong văn phòng.",
    "vocabNotes": [
      {
        "word": "news",
        "pos": "danh từ",
        "vi": "tin tức"
      },
      {
        "word": "merger",
        "pos": "danh từ",
        "vi": "vụ sáp nhập"
      }
    ]
  },
  {
    "id": "B1-bulk-030",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "countable-noun",
      "fewer-less"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "There are ___ employees working overtime this month than last month.",
    "options": [
      "fewer",
      "less",
      "few",
      "least"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Employees\" đếm được số nhiều, đi với \"fewer\" khi so sánh. \"Less\" dùng cho danh từ không đếm được.",
    "sentenceVi": "Tháng này có ít nhân viên làm thêm giờ hơn so với tháng trước.",
    "vocabNotes": [
      {
        "word": "employee",
        "pos": "danh từ",
        "vi": "nhân viên"
      },
      {
        "word": "overtime",
        "pos": "danh từ",
        "vi": "giờ làm thêm"
      }
    ]
  },
  {
    "id": "B1-bulk-031",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "uncountable-noun",
      "furniture"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new apartment didn't have ___ furniture when we first moved in.",
    "options": [
      "many",
      "much",
      "few",
      "a few"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Furniture\" là danh từ không đếm được, đi với \"much\" trong câu phủ định.",
    "sentenceVi": "Căn hộ mới không có nhiều đồ nội thất khi chúng tôi mới chuyển vào.",
    "vocabNotes": [
      {
        "word": "furniture",
        "pos": "danh từ",
        "vi": "đồ nội thất"
      },
      {
        "word": "move in",
        "pos": "cụm từ",
        "vi": "chuyển vào ở"
      }
    ]
  },
  {
    "id": "B1-bulk-032",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "plural-only-noun",
      "cattle"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The cattle on the farm ___ peacefully grazing in the open field.",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Cattle\" luôn đi với động từ số nhiều dù không có dạng \"cattles\".",
    "sentenceVi": "Đàn gia súc trên trang trại đang gặm cỏ yên bình trên cánh đồng rộng.",
    "vocabNotes": [
      {
        "word": "cattle",
        "pos": "danh từ",
        "vi": "đàn gia súc"
      },
      {
        "word": "graze",
        "pos": "động từ",
        "vi": "gặm cỏ"
      }
    ]
  },
  {
    "id": "B1-bulk-033",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "uncountable-noun",
      "piece-of"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The mentor offered ___ that completely changed my career path.",
    "options": [
      "an advice",
      "advice",
      "a piece of advice",
      "some advices"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Advice\" uncount: muốn đếm 1 lời khuyên cụ thể, dùng \"a piece of advice\". Đáp án này phù hợp ngữ cảnh \"một lời khuyên đã thay đổi sự nghiệp\".",
    "sentenceVi": "Người cố vấn đã cho tôi một lời khuyên đã thay đổi hoàn toàn con đường sự nghiệp của tôi.",
    "vocabNotes": [
      {
        "word": "mentor",
        "pos": "danh từ",
        "vi": "người cố vấn"
      },
      {
        "word": "career path",
        "pos": "cụm từ",
        "vi": "con đường sự nghiệp"
      }
    ]
  },
  {
    "id": "B1-bulk-034",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "ics-noun",
      "economics"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Economics ___ the study of how societies allocate scarce resources.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answerIndex": 0,
    "explanationVi": "Tên môn học kết thúc \"-ics\" (Economics, Mathematics, Physics) đi với động từ số ít.",
    "sentenceVi": "Kinh tế học là môn nghiên cứu cách xã hội phân bổ các nguồn lực khan hiếm.",
    "vocabNotes": [
      {
        "word": "economics",
        "pos": "danh từ",
        "vi": "kinh tế học"
      },
      {
        "word": "allocate",
        "pos": "động từ",
        "vi": "phân bổ"
      },
      {
        "word": "scarce",
        "pos": "tính từ",
        "vi": "khan hiếm"
      }
    ]
  },
  {
    "id": "B1-bulk-035",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "singular-plural-same-form",
      "means"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Email is the most efficient ___ of communication in our office.",
    "options": [
      "mean",
      "means",
      "mean's",
      "meaning"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Means\" (phương tiện) có dạng số ít và số nhiều giống nhau. \"Mean\" có nghĩa khác (xấu tính / trung bình).",
    "sentenceVi": "Email là phương tiện liên lạc hiệu quả nhất trong văn phòng của chúng tôi.",
    "vocabNotes": [
      {
        "word": "means",
        "pos": "danh từ",
        "vi": "phương tiện"
      },
      {
        "word": "efficient",
        "pos": "tính từ",
        "vi": "hiệu quả"
      }
    ]
  },
  {
    "id": "B1-bulk-036",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "irregular-plural",
      "loaves"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The bakery sells fresh ___ of sourdough bread every morning.",
    "options": [
      "loaves",
      "loafs",
      "pieces",
      "slice"
    ],
    "answerIndex": 0,
    "explanationVi": "Số nhiều của \"loaf\" bất quy tắc là \"loaves\". \"Pieces\" thường dùng cho \"slice of bread\" thay vì cả ổ.",
    "sentenceVi": "Tiệm bánh bán những ổ bánh mì sourdough tươi mỗi sáng.",
    "vocabNotes": [
      {
        "word": "loaf",
        "pos": "danh từ",
        "vi": "ổ bánh"
      },
      {
        "word": "sourdough",
        "pos": "danh từ",
        "vi": "bánh mì sourdough"
      }
    ]
  },
  {
    "id": "B1-bulk-037",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "ics-noun",
      "mathematics"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Mathematics ___ a subject that requires both logical thinking and constant practice.",
    "options": [
      "is",
      "are",
      "were",
      "have"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Mathematics\" (tên môn học -ics) đi với động từ số ít dù có \"s\".",
    "sentenceVi": "Toán học là môn học đòi hỏi cả tư duy logic và thực hành liên tục.",
    "vocabNotes": [
      {
        "word": "mathematics",
        "pos": "danh từ",
        "vi": "toán học"
      },
      {
        "word": "logical thinking",
        "pos": "cụm từ",
        "vi": "tư duy logic"
      }
    ]
  },
  {
    "id": "B1-bulk-038",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "uncountable-noun",
      "traffic"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "There was so ___ traffic during the morning commute that I arrived an hour late.",
    "options": [
      "many",
      "much",
      "few",
      "lots"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Traffic\" là danh từ không đếm được, đi với \"much\" để chỉ mức độ. \"Lots\" cần \"of\".",
    "sentenceVi": "Lượng xe cộ trong giờ đi làm sáng nay đông đến mức tôi đi muộn cả tiếng.",
    "vocabNotes": [
      {
        "word": "traffic",
        "pos": "danh từ",
        "vi": "xe cộ giao thông"
      },
      {
        "word": "commute",
        "pos": "danh từ",
        "vi": "việc đi làm thường ngày"
      }
    ]
  },
  {
    "id": "B1-bulk-039",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "irregular-plural",
      "phenomena"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Several unexplained ___ have been recorded in this region over the past decade.",
    "options": [
      "phenomenon",
      "phenomenas",
      "phenomena",
      "phenomenons"
    ],
    "answerIndex": 2,
    "explanationVi": "Số nhiều của \"phenomenon\" là \"phenomena\" (gốc Hy Lạp). Câu có \"several\" và \"have been recorded\" → cần dạng số nhiều.",
    "sentenceVi": "Vài hiện tượng chưa được giải thích đã được ghi nhận ở khu vực này trong thập kỷ qua.",
    "vocabNotes": [
      {
        "word": "phenomenon",
        "pos": "danh từ",
        "vi": "hiện tượng"
      },
      {
        "word": "unexplained",
        "pos": "tính từ",
        "vi": "không lý giải được"
      },
      {
        "word": "decade",
        "pos": "danh từ",
        "vi": "thập kỷ"
      }
    ]
  },
  {
    "id": "B1-bulk-040",
    "topicId": "B1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "uncountable-noun",
      "clothing"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Winter ___ generally more expensive than summer wear due to material costs.",
    "options": [
      "clothing is",
      "clothings are",
      "clothes is",
      "cloth are"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Clothing\" là danh từ không đếm được, đi với động từ số ít \"is\". Không có \"clothings\". \"Cloth\" nghĩa khác (vải).",
    "sentenceVi": "Quần áo mùa đông thường đắt hơn đồ mùa hè do chi phí vật liệu.",
    "vocabNotes": [
      {
        "word": "clothing",
        "pos": "danh từ",
        "vi": "quần áo (nói chung)"
      },
      {
        "word": "material",
        "pos": "danh từ",
        "vi": "vật liệu"
      }
    ]
  }
];
