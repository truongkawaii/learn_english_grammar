import type { Question } from "@/types";

// Topic B5 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "B5-gen01",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "word-formation",
      "manner-adverbs"
    ],
    "prompt": "Chọn đáp án đúng để hoàn thành câu:",
    "sentence": "The manager reviewed the financial report ___ before the meeting started.",
    "options": [
      "careful",
      "carefully",
      "caring",
      "care"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ 'carefully' (một cách cẩn thận) bổ nghĩa cho động từ 'reviewed' để chỉ cách thức thực hiện hành động.",
    "sentenceVi": "Người quản lý đã xem xét báo cáo tài chính cẩn thận trước khi cuộc họp bắt đầu.",
    "vocabNotes": [
      {
        "word": "manager",
        "pos": "danh từ",
        "vi": "quản lý"
      },
      {
        "word": "reviewed",
        "pos": "động từ",
        "vi": "xem xét"
      },
      {
        "word": "financial report",
        "pos": "cụm từ",
        "vi": "báo cáo tài chính"
      },
      {
        "word": "carefully",
        "pos": "trạng từ",
        "vi": "cẩn thận"
      },
      {
        "word": "meeting",
        "pos": "danh từ",
        "vi": "cuộc họp"
      }
    ]
  },
  {
    "id": "B5-gen02",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "confusing-adverbs",
      "negative-adverbs"
    ],
    "prompt": "Chọn đáp án đúng nhất:",
    "sentence": "Due to the loud construction noise outside, the staff could ___ hear the speaker's presentation.",
    "options": [
      "hard",
      "hardly",
      "harder",
      "hardness"
    ],
    "answerIndex": 1,
    "explanationVi": "'Hardly' mang nghĩa là 'hầu như không', phù hợp với ngữ cảnh tiếng ồn làm cản trở việc nghe. 'Hard' là chăm chỉ/mạnh không phù hợp ở đây.",
    "sentenceVi": "Do tiếng ồn xây dựng lớn bên ngoài, nhân viên hầu như không thể nghe bài thuyết trình của diễn giả.",
    "vocabNotes": [
      {
        "word": "Due to",
        "pos": "cụm từ",
        "vi": "do / bởi vì"
      },
      {
        "word": "loud",
        "pos": "tính từ",
        "vi": "ồn ào"
      },
      {
        "word": "construction noise",
        "pos": "cụm từ",
        "vi": "tiếng ồn xây dựng"
      },
      {
        "word": "outside",
        "pos": "trạng từ",
        "vi": "bên ngoài"
      },
      {
        "word": "staff",
        "pos": "danh từ",
        "vi": "nhân viên"
      },
      {
        "word": "hardly",
        "pos": "trạng từ",
        "vi": "hầu như không"
      },
      {
        "word": "speaker's presentation",
        "pos": "cụm từ",
        "vi": "bài thuyết trình của diễn giả"
      }
    ]
  },
  {
    "id": "B5-gen03",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "time-adverbs",
      "adjective-adverb-same-form"
    ],
    "prompt": "Chọn từ loại phù hợp:",
    "sentence": "The marketing department publishes a newsletter ___ to keep clients informed of new services.",
    "options": [
      "monthly",
      "month",
      "months",
      "monthliness"
    ],
    "answerIndex": 0,
    "explanationVi": "'Monthly' vừa là tính từ vừa là trạng từ chỉ tần suất (hàng tháng), ở đây đóng vai trò trạng từ bổ nghĩa cho động từ 'publishes'.",
    "sentenceVi": "Phòng marketing xuất bản một bản tin hàng tháng để thông báo cho khách hàng về các dịch vụ mới.",
    "vocabNotes": [
      {
        "word": "marketing department",
        "pos": "cụm từ",
        "vi": "phòng marketing"
      },
      {
        "word": "publishes",
        "pos": "động từ",
        "vi": "xuất bản"
      },
      {
        "word": "newsletter",
        "pos": "danh từ",
        "vi": "bản tin"
      },
      {
        "word": "monthly",
        "pos": "trạng từ",
        "vi": "hàng tháng"
      },
      {
        "word": "clients",
        "pos": "danh từ",
        "vi": "khách hàng"
      },
      {
        "word": "informed",
        "pos": "tính từ",
        "vi": "được thông báo"
      },
      {
        "word": "services",
        "pos": "danh từ",
        "vi": "dịch vụ"
      }
    ]
  },
  {
    "id": "B5-gen04",
    "topicId": "B5",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "evaluation-adverbs",
      "sentence-adverbs"
    ],
    "prompt": "Sắp xếp các từ sau thành câu hoàn chỉnh:",
    "tiles": [
      "Luckily",
      "the",
      "flight",
      "was",
      "not",
      "delayed",
      "by",
      "the",
      "storm"
    ],
    "answer": "Luckily the flight was not delayed by the storm",
    "explanationVi": "Trạng từ chỉ sự đánh giá 'Luckily' (Thật may mắn) đứng đầu câu để bổ nghĩa cho cả mệnh đề phía sau.",
    "sentenceVi": "May mắn thay chuyến bay không bị trì hoãn bởi cơn bão.",
    "vocabNotes": [
      {
        "word": "Luckily",
        "pos": "trạng từ",
        "vi": "may mắn thay"
      },
      {
        "word": "flight",
        "pos": "danh từ",
        "vi": "chuyến bay"
      },
      {
        "word": "delayed",
        "pos": "tính từ",
        "vi": "bị trì hoãn"
      },
      {
        "word": "storm",
        "pos": "danh từ",
        "vi": "cơn bão"
      }
    ]
  },
  {
    "id": "B5-gen05",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "linking-adverbs",
      "contrast"
    ],
    "prompt": "Chọn trạng từ liên kết phù hợp:",
    "sentence": "The team worked overtime for three days. ___, they failed to meet the project deadline.",
    "options": [
      "Therefore",
      "Furthermore",
      "However",
      "Consequently"
    ],
    "answerIndex": 2,
    "explanationVi": "'However' (Tuy nhiên) được dùng để thể hiện mối quan hệ đối lập giữa hai câu (làm thêm giờ nhưng vẫn trễ hạn).",
    "sentenceVi": "Đội đã làm thêm giờ ba ngày. Tuy nhiên, họ đã không kịp thời hạn dự án.",
    "vocabNotes": [
      {
        "word": "worked overtime",
        "pos": "cụm từ",
        "vi": "làm thêm giờ"
      },
      {
        "word": "However",
        "pos": "liên từ",
        "vi": "tuy nhiên"
      },
      {
        "word": "failed",
        "pos": "động từ",
        "vi": "thất bại"
      },
      {
        "word": "meet",
        "pos": "động từ",
        "vi": "đáp ứng / kịp"
      },
      {
        "word": "project deadline",
        "pos": "cụm từ",
        "vi": "thời hạn dự án"
      }
    ]
  },
  {
    "id": "B5-gen06",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "perspective-adverbs"
    ],
    "prompt": "Chọn đáp án phù hợp nhất:",
    "sentence": "___, the company has seen a significant increase in profits over the last fiscal year.",
    "options": [
      "Financially",
      "Financial",
      "Finance",
      "Financed"
    ],
    "answerIndex": 0,
    "explanationVi": "Trạng từ chỉ góc nhìn 'Financially' (Về mặt tài chính) được dùng để giới thiệu khía cạnh mà người nói đang đề cập tới.",
    "sentenceVi": "Về mặt tài chính, công ty đã chứng kiến sự gia tăng đáng kể về lợi nhuận trong năm tài chính vừa qua.",
    "vocabNotes": [
      {
        "word": "Financially",
        "pos": "trạng từ",
        "vi": "về mặt tài chính"
      },
      {
        "word": "company",
        "pos": "danh từ",
        "vi": "công ty"
      },
      {
        "word": "significant",
        "pos": "tính từ",
        "vi": "đáng kể"
      },
      {
        "word": "increase",
        "pos": "danh từ",
        "vi": "sự gia tăng"
      },
      {
        "word": "profits",
        "pos": "danh từ",
        "vi": "lợi nhuận"
      },
      {
        "word": "fiscal year",
        "pos": "cụm từ",
        "vi": "năm tài chính"
      }
    ]
  },
  {
    "id": "B5-gen07",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "degree-adverbs"
    ],
    "prompt": "Điền một trạng từ chỉ mức độ phù hợp vào chỗ trống:",
    "sentence": "The new software is ___ complicated for the interns to use without proper training.",
    "explanationVi": "Các trạng từ chỉ mức độ như 'too' (quá) hoặc 'very' (rất) được dùng để bổ nghĩa cho tính từ 'complicated'.",
    "sentenceVi": "Phần mềm mới quá phức tạp để thực tập sinh sử dụng mà không có đào tạo phù hợp.",
    "vocabNotes": [
      {
        "word": "software",
        "pos": "danh từ",
        "vi": "phần mềm"
      },
      {
        "word": "complicated",
        "pos": "tính từ",
        "vi": "phức tạp"
      },
      {
        "word": "interns",
        "pos": "danh từ",
        "vi": "thực tập sinh"
      },
      {
        "word": "without",
        "pos": "giới từ",
        "vi": "mà không"
      },
      {
        "word": "proper",
        "pos": "tính từ",
        "vi": "phù hợp"
      },
      {
        "word": "training",
        "pos": "danh từ",
        "vi": "đào tạo"
      }
    ],
    "options": [
      "very",
      "enough",
      "too",
      "so"
    ],
    "answerIndex": 2
  },
  {
    "id": "B5-gen08",
    "topicId": "B5",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "adverbial-phrases",
      "manner-adverbs"
    ],
    "prompt": "Sắp xếp các từ để tạo thành câu đúng:",
    "tiles": [
      "The",
      "project",
      "was",
      "completed",
      "surprisingly",
      "quickly"
    ],
    "answer": "The project was completed surprisingly quickly",
    "explanationVi": "Trạng từ 'surprisingly' (một cách ngạc nhiên) bổ nghĩa cho trạng từ 'quickly' (nhanh) tạo thành một cụm trạng từ.",
    "sentenceVi": "Dự án đã được hoàn thành nhanh chóng một cách đáng ngạc nhiên.",
    "vocabNotes": [
      {
        "word": "project",
        "pos": "danh từ",
        "vi": "dự án"
      },
      {
        "word": "completed",
        "pos": "động từ",
        "vi": "hoàn thành"
      },
      {
        "word": "surprisingly",
        "pos": "trạng từ",
        "vi": "đáng ngạc nhiên"
      },
      {
        "word": "quickly",
        "pos": "trạng từ",
        "vi": "nhanh chóng"
      }
    ]
  },
  {
    "id": "B5-gen09",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "confusing-adverbs",
      "time-adverbs"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "The CEO will be arriving at the headquarters ___ to address the press.",
    "options": [
      "short",
      "shortly",
      "shorten",
      "shortness"
    ],
    "answerIndex": 1,
    "explanationVi": "'Shortly' là trạng từ chỉ thời gian có nghĩa là 'sớm' hoặc 'ngay sau đây' (soon), phù hợp để chỉ sự việc sắp xảy ra.",
    "sentenceVi": "Giám đốc điều hành sẽ đến trụ sở chính trong thời gian ngắn để phát biểu trước báo chí.",
    "vocabNotes": [
      {
        "word": "CEO",
        "pos": "danh từ",
        "vi": "giám đốc điều hành"
      },
      {
        "word": "arriving",
        "pos": "động từ",
        "vi": "đến"
      },
      {
        "word": "headquarters",
        "pos": "danh từ",
        "vi": "trụ sở chính"
      },
      {
        "word": "shortly",
        "pos": "trạng từ",
        "vi": "trong thời gian ngắn"
      },
      {
        "word": "address",
        "pos": "động từ",
        "vi": "phát biểu"
      },
      {
        "word": "press",
        "pos": "danh từ",
        "vi": "báo chí"
      }
    ]
  },
  {
    "id": "B5-gen10",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb-suffixes",
      "direction-adverbs"
    ],
    "prompt": "Chọn trạng từ phù hợp:",
    "sentence": "To open the vault, you must turn the dial ___ until it clicks.",
    "options": [
      "clockwise",
      "clocking",
      "clocked",
      "clocks"
    ],
    "answerIndex": 0,
    "explanationVi": "Đuôi '-wise' tạo thành trạng từ chỉ hướng hoặc cách thức; 'clockwise' nghĩa là theo chiều kim đồng hồ.",
    "sentenceVi": "Để mở két sắt, bạn phải xoay núm vặn theo chiều kim đồng hồ cho đến khi nó kêu tách.",
    "vocabNotes": [
      {
        "word": "vault",
        "pos": "danh từ",
        "vi": "két sắt"
      },
      {
        "word": "turn",
        "pos": "động từ",
        "vi": "xoay"
      },
      {
        "word": "dial",
        "pos": "danh từ",
        "vi": "núm vặn"
      },
      {
        "word": "clockwise",
        "pos": "trạng từ",
        "vi": "theo chiều kim đồng hồ"
      },
      {
        "word": "until",
        "pos": "liên từ",
        "vi": "cho đến khi"
      },
      {
        "word": "clicks",
        "pos": "động từ",
        "vi": "kêu tách"
      }
    ]
  },
  {
    "id": "B5-bulk-001",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "manner-ly"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She speaks French ___.",
    "options": [
      "fluent",
      "fluently",
      "fluency",
      "fluentness"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ \"fluently\" bổ nghĩa cho động từ \"speaks\". Adj + ly = adv.",
    "sentenceVi": "Cô ấy nói tiếng Pháp trôi chảy.",
    "vocabNotes": [
      {
        "word": "fluently",
        "pos": "trạng từ",
        "vi": "trôi chảy"
      }
    ]
  },
  {
    "id": "B5-bulk-002",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "frequency-usually"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He ___ comes to the office before 8 AM.",
    "options": [
      "usual",
      "usually",
      "most",
      "much"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ tần suất \"usually\" đứng trước động từ thường.",
    "sentenceVi": "Anh ấy thường đến văn phòng trước 8 giờ sáng.",
    "vocabNotes": [
      {
        "word": "usually",
        "pos": "trạng từ",
        "vi": "thường"
      }
    ]
  },
  {
    "id": "B5-bulk-003",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "time-yesterday"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The team finished the project ___.",
    "options": [
      "yesterday",
      "yesterdayly",
      "yesterdays",
      "yesterdayed"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Yesterday\" là trạng từ chỉ thời gian, không thêm \"-ly\".",
    "sentenceVi": "Đội đã hoàn thành dự án hôm qua.",
    "vocabNotes": [
      {
        "word": "yesterday",
        "pos": "trạng từ",
        "vi": "hôm qua"
      }
    ]
  },
  {
    "id": "B5-bulk-004",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "place-here"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Please put the package ___.",
    "options": [
      "here",
      "hers",
      "hour",
      "heretofore"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Here\" là trạng từ chỉ nơi chốn (ở đây).",
    "sentenceVi": "Vui lòng đặt bưu kiện ở đây.",
    "vocabNotes": [
      {
        "word": "here",
        "pos": "trạng từ",
        "vi": "ở đây"
      }
    ]
  },
  {
    "id": "B5-bulk-005",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "degree-very"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He runs ___ fast for his age.",
    "options": [
      "very",
      "much",
      "more",
      "most"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Very\" + tính từ/trạng từ để nhấn mạnh. \"Much\" không đi với tính từ thường.",
    "sentenceVi": "Anh ấy chạy rất nhanh so với tuổi của mình.",
    "vocabNotes": [
      {
        "word": "age",
        "pos": "danh từ",
        "vi": "tuổi"
      }
    ]
  },
  {
    "id": "B5-bulk-006",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "frequency-always"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She is ___ punctual for meetings.",
    "options": [
      "always",
      "most",
      "much",
      "more"
    ],
    "answerIndex": 0,
    "explanationVi": "Trạng từ tần suất \"always\" đứng sau động từ \"to be\".",
    "sentenceVi": "Cô ấy luôn đến đúng giờ cuộc họp.",
    "vocabNotes": [
      {
        "word": "punctual",
        "pos": "tính từ",
        "vi": "đúng giờ"
      }
    ]
  },
  {
    "id": "B5-bulk-007",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "good-vs-well"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He plays the guitar very ___.",
    "options": [
      "good",
      "goodly",
      "well",
      "better"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Well\" là trạng từ của \"good\". Sau động từ thường dùng trạng từ.",
    "sentenceVi": "Anh ấy chơi guitar rất giỏi.",
    "vocabNotes": [
      {
        "word": "guitar",
        "pos": "danh từ",
        "vi": "đàn guitar"
      }
    ]
  },
  {
    "id": "B5-bulk-008",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "hard-vs-hardly"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He worked ___ to finish the project on time.",
    "options": [
      "hard",
      "hardly",
      "hardness",
      "harder"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Hard\" vừa là tính từ vừa là trạng từ (chăm chỉ). \"Hardly\" = hầu như không (nghĩa khác).",
    "sentenceVi": "Anh ấy đã làm việc chăm chỉ để hoàn thành dự án đúng hạn.",
    "vocabNotes": [
      {
        "word": "hard",
        "pos": "trạng từ",
        "vi": "chăm chỉ"
      }
    ]
  },
  {
    "id": "B5-bulk-009",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "fast-no-ly"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The train moves ___ during peak hours.",
    "options": [
      "fast",
      "fastly",
      "faster",
      "fastness"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Fast\" vừa là tính từ vừa là trạng từ (nhanh). Không có \"fastly\".",
    "sentenceVi": "Tàu chạy nhanh trong giờ cao điểm.",
    "vocabNotes": [
      {
        "word": "peak hours",
        "pos": "cụm từ",
        "vi": "giờ cao điểm"
      }
    ]
  },
  {
    "id": "B5-bulk-010",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "time-now"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___, let's discuss the agenda for tomorrow.",
    "options": [
      "Now",
      "Then",
      "Soon",
      "Just"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Now\" diễn đạt thời điểm hiện tại / chuyển chủ đề.",
    "sentenceVi": "Bây giờ, hãy thảo luận chương trình cho ngày mai.",
    "vocabNotes": [
      {
        "word": "agenda",
        "pos": "danh từ",
        "vi": "chương trình"
      }
    ]
  },
  {
    "id": "B5-bulk-011",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "frequency-rarely"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He ___ misses a deadline.",
    "options": [
      "rare",
      "rarely",
      "rareness",
      "more rare"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Rarely\" = hiếm khi, là trạng từ tần suất (vị trí trước động từ thường).",
    "sentenceVi": "Anh ấy hiếm khi lỡ hạn chót.",
    "vocabNotes": [
      {
        "word": "deadline",
        "pos": "danh từ",
        "vi": "hạn chót"
      }
    ]
  },
  {
    "id": "B5-bulk-012",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "position-end"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She drove the new car ___.",
    "options": [
      "careful",
      "carefully",
      "carefulness",
      "more careful"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ chỉ cách thức (carefully) đứng cuối câu sau tân ngữ.",
    "sentenceVi": "Cô ấy lái chiếc xe mới một cách cẩn thận.",
    "vocabNotes": [
      {
        "word": "carefully",
        "pos": "trạng từ",
        "vi": "cẩn thận"
      }
    ]
  },
  {
    "id": "B5-bulk-013",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "degree-extremely"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The exam was ___ difficult.",
    "options": [
      "extreme",
      "extremely",
      "extremeness",
      "extremed"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ \"extremely\" bổ nghĩa cho tính từ \"difficult\".",
    "sentenceVi": "Kỳ thi cực kỳ khó.",
    "vocabNotes": [
      {
        "word": "extremely",
        "pos": "trạng từ",
        "vi": "cực kỳ"
      }
    ]
  },
  {
    "id": "B5-bulk-014",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "sentence-fortunately"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___, no one was injured in the accident.",
    "options": [
      "Fortunate",
      "Fortunately",
      "Fortune",
      "Fortuneously"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ chỉ thái độ \"fortunately\" thường đứng đầu câu, có dấu phẩy.",
    "sentenceVi": "Thật may mắn, không ai bị thương trong vụ tai nạn.",
    "vocabNotes": [
      {
        "word": "injure",
        "pos": "động từ",
        "vi": "bị thương"
      },
      {
        "word": "accident",
        "pos": "danh từ",
        "vi": "tai nạn"
      }
    ]
  },
  {
    "id": "B5-bulk-015",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "comparative-more-quickly"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She finished the test ___ than the others.",
    "options": [
      "quicker",
      "more quickly",
      "most quickly",
      "quicklier"
    ],
    "answerIndex": 1,
    "explanationVi": "So sánh hơn của trạng từ kết thúc \"-ly\": more + adv (không thêm \"-er\"). Trừ một số ngoại lệ: faster, harder.",
    "sentenceVi": "Cô ấy hoàn thành bài kiểm tra nhanh hơn những người khác.",
    "vocabNotes": [
      {
        "word": "test",
        "pos": "danh từ",
        "vi": "bài kiểm tra"
      }
    ]
  },
  {
    "id": "B5-bulk-016",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "superlative-most"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Of all the team members, she works ___.",
    "options": [
      "the most efficient",
      "the most efficiently",
      "most efficient",
      "efficient"
    ],
    "answerIndex": 1,
    "explanationVi": "So sánh nhất trạng từ kết thúc \"-ly\": the most + adv.",
    "sentenceVi": "Trong tất cả các thành viên đội, cô ấy làm việc hiệu quả nhất.",
    "vocabNotes": [
      {
        "word": "efficiently",
        "pos": "trạng từ",
        "vi": "hiệu quả"
      }
    ]
  },
  {
    "id": "B5-bulk-017",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "still-already"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He's ___ working on the same report from last week.",
    "options": [
      "yet",
      "still",
      "already",
      "just"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Still\" cho hành động tiếp tục đến hiện tại. \"Yet\" chủ yếu trong câu phủ định/nghi vấn.",
    "sentenceVi": "Anh ấy vẫn đang làm cùng báo cáo từ tuần trước.",
    "vocabNotes": [
      {
        "word": "report",
        "pos": "danh từ",
        "vi": "báo cáo"
      }
    ]
  },
  {
    "id": "B5-bulk-018",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "linker-however"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The plan looks promising. ___, we need more data.",
    "options": [
      "Therefore",
      "However",
      "Otherwise",
      "Moreover"
    ],
    "answerIndex": 1,
    "explanationVi": "\"However\" diễn tả sự đối lập giữa 2 câu/ý.",
    "sentenceVi": "Kế hoạch trông có triển vọng. Tuy nhiên, chúng ta cần thêm dữ liệu.",
    "vocabNotes": [
      {
        "word": "promising",
        "pos": "tính từ",
        "vi": "có triển vọng"
      }
    ]
  },
  {
    "id": "B5-bulk-019",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "frequency-position"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I have ___ been to Tokyo before.",
    "options": [
      "never",
      "ever",
      "always",
      "just"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Never\" cho hành động chưa từng xảy ra (đã bao hàm phủ định). Trong HTHT, đứng giữa have và V3.",
    "sentenceVi": "Tôi chưa bao giờ đến Tokyo trước đây.",
    "vocabNotes": [
      {
        "word": "before",
        "pos": "trạng từ",
        "vi": "trước đây"
      }
    ]
  },
  {
    "id": "B5-bulk-020",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "late-vs-lately"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I haven't slept well ___.",
    "options": [
      "late",
      "lately",
      "later",
      "latest"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Lately\" = gần đây (= recently). \"Late\" = muộn (nghĩa khác).",
    "sentenceVi": "Tôi không ngủ ngon dạo gần đây.",
    "vocabNotes": [
      {
        "word": "lately",
        "pos": "trạng từ",
        "vi": "gần đây"
      }
    ]
  },
  {
    "id": "B5-bulk-021",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "quickly-vs-quick"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "You need to act ___ to seize this opportunity.",
    "options": [
      "quick",
      "quickly",
      "quickness",
      "quicker"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau động từ thường dùng trạng từ \"quickly\" (modify verb \"act\").",
    "sentenceVi": "Bạn cần hành động nhanh để nắm bắt cơ hội này.",
    "vocabNotes": [
      {
        "word": "seize",
        "pos": "động từ",
        "vi": "nắm bắt"
      },
      {
        "word": "opportunity",
        "pos": "danh từ",
        "vi": "cơ hội"
      }
    ]
  },
  {
    "id": "B5-bulk-022",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "time-soon"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We'll discuss this matter ___.",
    "options": [
      "soon",
      "soonness",
      "soonly",
      "sooner"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Soon\" = sớm. Là trạng từ, không thêm \"-ly\".",
    "sentenceVi": "Chúng ta sẽ thảo luận vấn đề này sớm.",
    "vocabNotes": [
      {
        "word": "discuss",
        "pos": "động từ",
        "vi": "thảo luận"
      },
      {
        "word": "matter",
        "pos": "danh từ",
        "vi": "vấn đề"
      }
    ]
  },
  {
    "id": "B5-bulk-023",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "two-modifiers"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He answered the question ___ correctly.",
    "options": [
      "surprising",
      "surprisingly",
      "surprise",
      "surprised"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ \"surprisingly\" bổ nghĩa cho trạng từ khác \"correctly\".",
    "sentenceVi": "Anh ấy đã trả lời câu hỏi một cách chính xác đến bất ngờ.",
    "vocabNotes": [
      {
        "word": "surprisingly",
        "pos": "trạng từ",
        "vi": "đáng ngạc nhiên"
      },
      {
        "word": "correctly",
        "pos": "trạng từ",
        "vi": "đúng / chính xác"
      }
    ]
  },
  {
    "id": "B5-bulk-024",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "linker-furthermore"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The product is affordable. ___, it has a great warranty.",
    "options": [
      "Furthermore",
      "However",
      "Otherwise",
      "Instead"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Furthermore\" = hơn nữa, dùng để thêm thông tin (= moreover).",
    "sentenceVi": "Sản phẩm này có giá phải chăng. Hơn nữa, nó có bảo hành tuyệt vời.",
    "vocabNotes": [
      {
        "word": "affordable",
        "pos": "tính từ",
        "vi": "giá phải chăng"
      },
      {
        "word": "warranty",
        "pos": "danh từ",
        "vi": "bảo hành"
      }
    ]
  },
  {
    "id": "B5-bulk-025",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "seriously-modify-verb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We need to take this issue ___.",
    "options": [
      "serious",
      "seriously",
      "seriousness",
      "seriousing"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau động từ \"take\" cần trạng từ \"seriously\".",
    "sentenceVi": "Chúng ta cần phải xem xét vấn đề này một cách nghiêm túc.",
    "vocabNotes": [
      {
        "word": "seriously",
        "pos": "trạng từ",
        "vi": "nghiêm túc"
      },
      {
        "word": "issue",
        "pos": "danh từ",
        "vi": "vấn đề"
      }
    ]
  },
  {
    "id": "B5-bulk-026",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "comparative-irregular-well"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She performed ___ in the second interview than in the first.",
    "options": [
      "better",
      "weller",
      "more well",
      "gooder"
    ],
    "answerIndex": 0,
    "explanationVi": "So sánh hơn của \"well\" bất quy tắc: well → better → best.",
    "sentenceVi": "Cô ấy thể hiện tốt hơn trong cuộc phỏng vấn thứ hai so với cuộc đầu.",
    "vocabNotes": [
      {
        "word": "perform",
        "pos": "động từ",
        "vi": "thể hiện"
      },
      {
        "word": "interview",
        "pos": "danh từ",
        "vi": "cuộc phỏng vấn"
      }
    ]
  },
  {
    "id": "B5-bulk-027",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "superlative-irregular"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Of the three options, this one is supported ___.",
    "options": [
      "the most",
      "more",
      "most",
      "mostly"
    ],
    "answerIndex": 0,
    "explanationVi": "So sánh nhất của \"much\" là \"the most\". Dùng với trạng từ \"supported\".",
    "sentenceVi": "Trong 3 phương án, phương án này được ủng hộ nhiều nhất.",
    "vocabNotes": [
      {
        "word": "option",
        "pos": "danh từ",
        "vi": "phương án"
      },
      {
        "word": "support",
        "pos": "động từ",
        "vi": "ủng hộ"
      }
    ]
  },
  {
    "id": "B5-bulk-028",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "sentence-apparently"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___, the meeting has been postponed to next week.",
    "options": [
      "Apparent",
      "Apparently",
      "Appearance",
      "Apparency"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ chỉ thái độ \"apparently\" (= có vẻ như) thường đứng đầu câu.",
    "sentenceVi": "Có vẻ như cuộc họp đã được hoãn sang tuần sau.",
    "vocabNotes": [
      {
        "word": "apparently",
        "pos": "trạng từ",
        "vi": "có vẻ như"
      },
      {
        "word": "postpone",
        "pos": "động từ",
        "vi": "hoãn"
      }
    ]
  },
  {
    "id": "B5-bulk-029",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "negative-position-rarely"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ have I seen such an impressive presentation.",
    "options": [
      "Rarely",
      "Rare",
      "More rare",
      "Rareness"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Rarely\" đứng đầu câu → đảo ngữ: Rarely + trợ động từ + S + V.",
    "sentenceVi": "Hiếm khi tôi thấy một bài thuyết trình ấn tượng như vậy.",
    "vocabNotes": [
      {
        "word": "impressive",
        "pos": "tính từ",
        "vi": "ấn tượng"
      }
    ]
  },
  {
    "id": "B5-bulk-030",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "intensifier-pretty"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new policy is ___ controversial among employees.",
    "options": [
      "prettily",
      "pretty",
      "prettiest",
      "more pretty"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Pretty\" có thể là trạng từ chỉ mức độ = quite (khá). Khác với \"pretty\" tính từ (xinh đẹp).",
    "sentenceVi": "Chính sách mới khá gây tranh cãi giữa các nhân viên.",
    "vocabNotes": [
      {
        "word": "controversial",
        "pos": "tính từ",
        "vi": "gây tranh cãi"
      }
    ]
  },
  {
    "id": "B5-bulk-031",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "place-everywhere"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "You can buy this product ___ in the city.",
    "options": [
      "everywhere",
      "every",
      "anywhere",
      "somewhere"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Everywhere\" = khắp mọi nơi (khẳng định). Trong câu phủ định dùng \"anywhere\".",
    "sentenceVi": "Bạn có thể mua sản phẩm này ở khắp mọi nơi trong thành phố.",
    "vocabNotes": [
      {
        "word": "everywhere",
        "pos": "trạng từ",
        "vi": "khắp nơi"
      }
    ]
  },
  {
    "id": "B5-bulk-032",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "frequency-occasionally"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He ___ checks his emails after working hours.",
    "options": [
      "occasional",
      "occasionally",
      "occasion",
      "occasioning"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Occasionally\" = thỉnh thoảng, là trạng từ tần suất.",
    "sentenceVi": "Anh ấy thỉnh thoảng kiểm tra email sau giờ làm việc.",
    "vocabNotes": [
      {
        "word": "occasionally",
        "pos": "trạng từ",
        "vi": "thỉnh thoảng"
      }
    ]
  },
  {
    "id": "B5-bulk-033",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "absolutely-degree"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "That's ___ amazing news!",
    "options": [
      "absolute",
      "absolutely",
      "absoluteness",
      "absolutist"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ \"absolutely\" + tính từ \"amazing\" để nhấn mạnh.",
    "sentenceVi": "Đó là tin tức tuyệt vời hoàn toàn!",
    "vocabNotes": [
      {
        "word": "absolutely",
        "pos": "trạng từ",
        "vi": "hoàn toàn"
      },
      {
        "word": "amazing",
        "pos": "tính từ",
        "vi": "tuyệt vời"
      }
    ]
  },
  {
    "id": "B5-bulk-034",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "sentence-honestly"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___, I don't think this idea will work.",
    "options": [
      "Honest",
      "Honesty",
      "Honestly",
      "Honest-like"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Honestly\" đứng đầu câu để bày tỏ quan điểm cá nhân (= thành thật mà nói).",
    "sentenceVi": "Thành thật mà nói, tôi không nghĩ ý tưởng này sẽ thành công.",
    "vocabNotes": [
      {
        "word": "honestly",
        "pos": "trạng từ",
        "vi": "thành thật"
      }
    ]
  },
  {
    "id": "B5-bulk-035",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "time-yet-question"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Have you finished the report ___?",
    "options": [
      "yet",
      "already",
      "just",
      "still"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Yet\" trong câu hỏi và phủ định (= đã ... chưa). \"Already\" trong câu khẳng định.",
    "sentenceVi": "Bạn đã hoàn thành báo cáo chưa?",
    "vocabNotes": [
      {
        "word": "yet",
        "pos": "trạng từ",
        "vi": "đã ... chưa"
      }
    ]
  },
  {
    "id": "B5-bulk-036",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adverb",
      "incredibly-modify-adj"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The performance was ___ impressive last night.",
    "options": [
      "incredible",
      "incredibly",
      "incredibleness",
      "incrediblity"
    ],
    "answerIndex": 1,
    "explanationVi": "Trạng từ \"incredibly\" bổ nghĩa cho tính từ \"impressive\".",
    "sentenceVi": "Buổi biểu diễn tối qua ấn tượng đến không thể tin được.",
    "vocabNotes": [
      {
        "word": "incredibly",
        "pos": "trạng từ",
        "vi": "không thể tin được"
      },
      {
        "word": "performance",
        "pos": "danh từ",
        "vi": "buổi biểu diễn"
      }
    ]
  },
  {
    "id": "B5-bulk-037",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "early-vs-earlier"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Could we meet ___ tomorrow morning?",
    "options": [
      "early",
      "earlier",
      "earliest",
      "earlierness"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Early\" là cả tính từ và trạng từ. Không thêm \"-ly\". Ở đây bổ nghĩa cho meet.",
    "sentenceVi": "Mai chúng ta có thể gặp sớm vào buổi sáng được không?",
    "vocabNotes": [
      {
        "word": "early",
        "pos": "trạng từ",
        "vi": "sớm"
      }
    ]
  },
  {
    "id": "B5-bulk-038",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "comparison-as-as"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He doesn't speak ___ confidently ___ his colleague.",
    "options": [
      "so / than",
      "as / as",
      "more / than",
      "less / as"
    ],
    "answerIndex": 1,
    "explanationVi": "\"As + trạng từ + as\" cho so sánh ngang bằng.",
    "sentenceVi": "Anh ấy không nói tự tin bằng đồng nghiệp.",
    "vocabNotes": [
      {
        "word": "confidently",
        "pos": "trạng từ",
        "vi": "tự tin"
      },
      {
        "word": "colleague",
        "pos": "danh từ",
        "vi": "đồng nghiệp"
      }
    ]
  },
  {
    "id": "B5-bulk-039",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "sentence-perhaps"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ we should try a different approach to the problem.",
    "options": [
      "Perhaps",
      "Perhapsly",
      "Maybely",
      "Perhapsness"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Perhaps\" = có lẽ, là trạng từ chỉ thái độ đứng đầu câu.",
    "sentenceVi": "Có lẽ chúng ta nên thử một cách tiếp cận khác cho vấn đề.",
    "vocabNotes": [
      {
        "word": "perhaps",
        "pos": "trạng từ",
        "vi": "có lẽ"
      },
      {
        "word": "approach",
        "pos": "danh từ",
        "vi": "cách tiếp cận"
      }
    ]
  },
  {
    "id": "B5-bulk-040",
    "topicId": "B5",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adverb",
      "negation-no-longer"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He ___ works at that firm; he resigned last month.",
    "options": [
      "no longer",
      "not anymore",
      "no more",
      "never longer"
    ],
    "answerIndex": 0,
    "explanationVi": "\"No longer\" = không còn nữa. Đứng giữa chủ ngữ và động từ.",
    "sentenceVi": "Anh ấy không còn làm việc ở công ty đó; anh ấy đã nghỉ tháng trước.",
    "vocabNotes": [
      {
        "word": "no longer",
        "pos": "cụm từ",
        "vi": "không còn"
      },
      {
        "word": "resign",
        "pos": "động từ",
        "vi": "nghỉ việc"
      }
    ]
  }
];
