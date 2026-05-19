import type { Question } from "@/types";

// Topic A1 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "A1-q01",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "word-class",
      "verb"
    ],
    "prompt": "Từ in đậm thuộc loại từ nào?",
    "sentence": "The quick brown fox **jumps** over the lazy dog.",
    "options": [
      "Danh từ",
      "Động từ",
      "Tính từ",
      "Trạng từ"
    ],
    "answerIndex": 1,
    "explanationVi": "'**jumps**' là **động từ** vì nó diễn tả hành động của chủ ngữ 'The fox'.",
    "sentenceVi": "Con cáo nâu nhanh nhẹn nhảy qua con chó lười biếng.",
    "vocabNotes": [
      {
        "word": "quick",
        "pos": "tính từ",
        "vi": "nhanh nhẹn"
      },
      {
        "word": "brown",
        "pos": "tính từ",
        "vi": "màu nâu"
      },
      {
        "word": "fox",
        "pos": "danh từ",
        "vi": "cáo"
      },
      {
        "word": "jumps",
        "pos": "động từ",
        "vi": "nhảy"
      },
      {
        "word": "over",
        "pos": "giới từ",
        "vi": "qua"
      },
      {
        "word": "lazy",
        "pos": "tính từ",
        "vi": "lười biếng"
      },
      {
        "word": "dog",
        "pos": "danh từ",
        "vi": "chó"
      }
    ]
  },
  {
    "id": "A1-q02",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "word-class",
      "adjective"
    ],
    "prompt": "Từ in đậm thuộc loại từ nào?",
    "sentence": "She gave a **brilliant** speech yesterday.",
    "options": [
      "Danh từ",
      "Động từ",
      "Tính từ",
      "Trạng từ"
    ],
    "answerIndex": 2,
    "explanationVi": "'**brilliant**' là **tính từ** bổ nghĩa cho danh từ 'speech' (bài phát biểu).",
    "sentenceVi": "Cô ấy đã có một bài phát biểu xuất sắc ngày hôm qua.",
    "vocabNotes": [
      {
        "word": "gave",
        "pos": "động từ",
        "vi": "đã cho/phát biểu"
      },
      {
        "word": "brilliant",
        "pos": "tính từ",
        "vi": "xuất sắc"
      },
      {
        "word": "speech",
        "pos": "danh từ",
        "vi": "bài phát biểu"
      },
      {
        "word": "yesterday",
        "pos": "trạng từ",
        "vi": "hôm qua"
      }
    ]
  },
  {
    "id": "A1-q03",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "word-class",
      "adverb"
    ],
    "prompt": "Từ in đậm thuộc loại từ nào?",
    "sentence": "He finished the project **quickly** and accurately.",
    "options": [
      "Tính từ",
      "Trạng từ",
      "Danh từ",
      "Giới từ"
    ],
    "answerIndex": 1,
    "explanationVi": "'**quickly**' là **trạng từ** (đuôi -ly), bổ nghĩa cho động từ 'finished' — chỉ cách thức.",
    "sentenceVi": "Anh ấy đã hoàn thành dự án một cách nhanh chóng và chính xác.",
    "vocabNotes": [
      {
        "word": "finished",
        "pos": "động từ",
        "vi": "đã hoàn thành"
      },
      {
        "word": "project",
        "pos": "danh từ",
        "vi": "dự án"
      },
      {
        "word": "quickly",
        "pos": "trạng từ",
        "vi": "nhanh chóng"
      },
      {
        "word": "accurately",
        "pos": "trạng từ",
        "vi": "chính xác"
      }
    ]
  },
  {
    "id": "A1-q04",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "word-class",
      "interjection"
    ],
    "prompt": "'**Wow**' trong câu 'Wow, that's amazing!' là từ loại gì?",
    "sentence": "**Wow**, that's amazing!",
    "options": [
      "Đại từ",
      "Thán từ",
      "Tính từ",
      "Liên từ"
    ],
    "answerIndex": 1,
    "explanationVi": "**Wow** là **thán từ** (interjection) — biểu lộ cảm xúc ngạc nhiên.",
    "sentenceVi": "Chà, điều đó thật tuyệt vời!",
    "vocabNotes": [
      {
        "word": "Wow",
        "pos": "thán từ",
        "vi": "Chà"
      },
      {
        "word": "amazing",
        "pos": "tính từ",
        "vi": "tuyệt vời"
      }
    ]
  },
  {
    "id": "A1-q05",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "word-class",
      "adverb"
    ],
    "prompt": "Từ 'happily' thuộc loại từ gì? Gõ tên loại từ (tiếng Việt hoặc tiếng Anh viết tắt).",
    "sentence": "She sang happily at the party.",
    "explanationVi": "'happily' = vui vẻ — là **trạng từ** (adverb), đuôi -ly điển hình, bổ nghĩa cho động từ 'sang'.",
    "sentenceVi": "Cô ấy đã hát rất vui vẻ tại bữa tiệc.",
    "vocabNotes": [
      {
        "word": "sang",
        "pos": "động từ",
        "vi": "đã hát"
      },
      {
        "word": "happily",
        "pos": "trạng từ",
        "vi": "vui vẻ"
      },
      {
        "word": "party",
        "pos": "danh từ",
        "vi": "bữa tiệc"
      }
    ],
    "options": [
      "gracefully",
      "trạng từ",
      "loudly",
      "clearly"
    ],
    "answerIndex": 1
  },
  {
    "id": "A1-q06",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "phrase",
      "prepositional-phrase"
    ],
    "prompt": "Cụm từ '**on the table**' trong câu này là loại cụm gì?",
    "sentence": "The book **on the table** is mine.",
    "options": [
      "Cụm danh từ",
      "Cụm động từ",
      "Cụm giới từ",
      "Cụm trạng từ"
    ],
    "answerIndex": 2,
    "explanationVi": "Bắt đầu bằng giới từ 'on' → đây là **cụm giới từ** (prepositional phrase), bổ nghĩa cho danh từ 'book'.",
    "sentenceVi": "Cuốn sách trên bàn là của tôi.",
    "vocabNotes": [
      {
        "word": "book",
        "pos": "danh từ",
        "vi": "sách"
      },
      {
        "word": "on the table",
        "pos": "cụm từ",
        "vi": "trên bàn"
      },
      {
        "word": "mine",
        "pos": "đại từ",
        "vi": "của tôi"
      }
    ]
  },
  {
    "id": "A1-q07",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "phrase",
      "noun-phrase"
    ],
    "prompt": "Cụm '**beautiful flowers in the garden**' là loại cụm gì?",
    "sentence": "I love **beautiful flowers in the garden**.",
    "options": [
      "Cụm danh từ",
      "Cụm động từ",
      "Cụm tính từ",
      "Mệnh đề độc lập"
    ],
    "answerIndex": 0,
    "explanationVi": "Trung tâm cụm là danh từ 'flowers', có tính từ 'beautiful' và cụm giới từ 'in the garden' bổ nghĩa → **cụm danh từ**.",
    "sentenceVi": "Tôi yêu những bông hoa đẹp trong vườn.",
    "vocabNotes": [
      {
        "word": "love",
        "pos": "động từ",
        "vi": "yêu"
      },
      {
        "word": "beautiful",
        "pos": "tính từ",
        "vi": "đẹp"
      },
      {
        "word": "flowers",
        "pos": "danh từ",
        "vi": "hoa"
      },
      {
        "word": "in the garden",
        "pos": "cụm từ",
        "vi": "trong vườn"
      }
    ]
  },
  {
    "id": "A1-q08",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 1,
    "tags": [
      "sentence-structure"
    ],
    "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
    "tiles": [
      "very",
      "is",
      "She",
      "intelligent"
    ],
    "answer": "She is very intelligent",
    "explanationVi": "Trật tự cơ bản: **Chủ ngữ (She) + động từ (is) + cụm tính từ (very intelligent)**.",
    "sentenceVi": "Cô ấy rất thông minh.",
    "vocabNotes": [
      {
        "word": "very",
        "pos": "trạng từ",
        "vi": "rất"
      },
      {
        "word": "intelligent",
        "pos": "tính từ",
        "vi": "thông minh"
      }
    ]
  },
  {
    "id": "A1-q09",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "sentence-structure",
      "prepositional-phrase"
    ],
    "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
    "tiles": [
      "park",
      "are",
      "walking",
      "They",
      "in",
      "the"
    ],
    "answer": "They are walking in the park",
    "explanationVi": "Cấu trúc: **They (S) + are walking (V) + in the park (cụm giới từ chỉ nơi chốn)**.",
    "sentenceVi": "Họ đang đi dạo trong công viên.",
    "vocabNotes": [
      {
        "word": "walking",
        "pos": "động từ",
        "vi": "đi dạo"
      },
      {
        "word": "in the park",
        "pos": "cụm từ",
        "vi": "trong công viên"
      }
    ]
  },
  {
    "id": "A1-q10",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "word-class",
      "preposition"
    ],
    "prompt": "Từ nào dưới đây **KHÔNG** phải là giới từ?",
    "sentence": "Chọn 1 từ:",
    "options": [
      "under",
      "above",
      "behind",
      "quickly"
    ],
    "answerIndex": 3,
    "explanationVi": "'quickly' có đuôi -ly → là trạng từ. Ba từ còn lại đều là giới từ chỉ vị trí.",
    "sentenceVi": "Chọn một từ.",
    "vocabNotes": [
      {
        "word": "Chọn",
        "pos": "động từ",
        "vi": "choose"
      },
      {
        "word": "1",
        "pos": "tính từ",
        "vi": "one"
      },
      {
        "word": "từ",
        "pos": "danh từ",
        "vi": "word"
      }
    ]
  },
  {
    "id": "A1-q11",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "word-class",
      "noun"
    ],
    "prompt": "Trong câu 'I have a strong belief in justice', từ 'belief' là loại từ gì?",
    "sentence": "I have a strong belief in justice.",
    "explanationVi": "'belief' là **danh từ** (niềm tin). Tip: được mạo từ 'a' và tính từ 'strong' đứng trước → chắc chắn là danh từ.",
    "sentenceVi": "Tôi có một niềm tin mạnh mẽ vào công lý.",
    "vocabNotes": [
      {
        "word": "strong",
        "pos": "tính từ",
        "vi": "mạnh mẽ"
      },
      {
        "word": "belief",
        "pos": "danh từ",
        "vi": "niềm tin"
      },
      {
        "word": "justice",
        "pos": "danh từ",
        "vi": "công lý"
      }
    ],
    "options": [
      "opinion",
      "idea",
      "danh từ",
      "view"
    ],
    "answerIndex": 2
  },
  {
    "id": "A1-q12",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "phrase",
      "head-noun"
    ],
    "prompt": "Trong cụm danh từ 'An old man and his dog', từ nào là **trung tâm cụm** (head)?",
    "sentence": "An old **man** and his dog walked slowly.",
    "options": [
      "old",
      "man",
      "and",
      "dog"
    ],
    "answerIndex": 1,
    "explanationVi": "Trong cụm danh từ, **head** là danh từ chính được bổ nghĩa. Ở đây 'old' bổ nghĩa cho 'man' → **man** là head.",
    "sentenceVi": "Một người đàn ông lớn tuổi và con chó của ông ấy đã đi bộ chậm rãi.",
    "vocabNotes": [
      {
        "word": "old",
        "pos": "tính từ",
        "vi": "lớn tuổi"
      },
      {
        "word": "man",
        "pos": "danh từ",
        "vi": "đàn ông"
      },
      {
        "word": "dog",
        "pos": "danh từ",
        "vi": "chó"
      },
      {
        "word": "walked",
        "pos": "động từ",
        "vi": "đã đi bộ"
      },
      {
        "word": "slowly",
        "pos": "trạng từ",
        "vi": "chậm rãi"
      }
    ]
  },
  {
    "id": "A1-bulk-001",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "noun",
      "determiner",
      "countable-uncountable-nouns"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "There was ___ information available about the new policy on the company website.",
    "options": [
      "many",
      "few",
      "much",
      "several"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ \"information\" là danh từ không đếm được, do đó ta cần dùng từ hạn định \"much\" để bổ nghĩa cho nó. Các lựa chọn khác như \"many\", \"few\", \"several\" dùng cho danh từ đếm được số nhiều.",
    "sentenceVi": "Có rất ít thông tin về chính sách mới trên trang web của công ty.",
    "vocabNotes": [
      {
        "word": "information",
        "pos": "danh từ",
        "vi": "thông tin"
      },
      {
        "word": "policy",
        "pos": "danh từ",
        "vi": "chính sách"
      },
      {
        "word": "website",
        "pos": "danh từ",
        "vi": "trang web"
      }
    ]
  },
  {
    "id": "A1-bulk-002",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "verb",
      "tense",
      "future-simple"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The marketing team ___ the quarterly report by the end of next week.",
    "options": [
      "completes",
      "completed",
      "will complete",
      "is completing"
    ],
    "answerIndex": 2,
    "explanationVi": "Cụm từ \"by the end of next week\" chỉ một thời điểm trong tương lai, báo hiệu hành động sẽ hoàn thành trước thời điểm đó. Vì vậy, ta dùng thì tương lai đơn \"will complete\".",
    "sentenceVi": "Đội ngũ marketing sẽ hoàn thành báo cáo quý trước cuối tuần tới.",
    "vocabNotes": [
      {
        "word": "marketing team",
        "pos": "cụm từ",
        "vi": "đội ngũ marketing"
      },
      {
        "word": "quarterly report",
        "pos": "cụm từ",
        "vi": "báo cáo hàng quý"
      },
      {
        "word": "complete",
        "pos": "động từ",
        "vi": "hoàn thành"
      }
    ]
  },
  {
    "id": "A1-bulk-003",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "adjective"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The speaker articulated his points ___ and persuasively during the conference.",
    "options": [
      "clear",
      "clearly",
      "clearest",
      "clarity"
    ],
    "answerIndex": 1,
    "explanationVi": "Chỗ trống cần một trạng từ để bổ nghĩa cho động từ \"articulated\" (diễn đạt) và cùng song song với trạng từ \"persuasively\". Do đó, \"clearly\" là đáp án đúng.",
    "sentenceVi": "Diễn giả đã trình bày các quan điểm của mình một cách rõ ràng và thuyết phục trong hội nghị.",
    "vocabNotes": [
      {
        "word": "articulated",
        "pos": "động từ",
        "vi": "diễn đạt rõ ràng"
      },
      {
        "word": "persuasively",
        "pos": "trạng từ",
        "vi": "một cách thuyết phục"
      },
      {
        "word": "conference",
        "pos": "danh từ",
        "vi": "hội nghị"
      }
    ]
  },
  {
    "id": "A1-bulk-004",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "preposition",
      "means-of-transport"
    ],
    "prompt": "Điền giới từ phù hợp vào chỗ trống:",
    "sentence": "Many commuters choose to travel ___ subway during rush hour to avoid traffic.",
    "explanationVi": "Giới từ \"by\" được dùng để chỉ phương tiện giao thông (by subway, by bus, by train).",
    "sentenceVi": "Nhiều người đi làm chọn đi tàu điện ngầm trong giờ cao điểm để tránh kẹt xe.",
    "vocabNotes": [
      {
        "word": "commuters",
        "pos": "danh từ",
        "vi": "những người đi làm hàng ngày"
      },
      {
        "word": "subway",
        "pos": "danh từ",
        "vi": "tàu điện ngầm"
      },
      {
        "word": "rush hour",
        "pos": "cụm từ",
        "vi": "giờ cao điểm"
      },
      {
        "word": "avoid",
        "pos": "động từ",
        "vi": "tránh"
      }
    ],
    "options": [
      "in",
      "with",
      "by",
      "on"
    ],
    "answerIndex": 2
  },
  {
    "id": "A1-bulk-005",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "noun-phrase",
      "sentence-structure",
      "adjective",
      "determiner"
    ],
    "prompt": "Sắp xếp các từ để tạo thành câu hoàn chỉnh:",
    "tiles": [
      "a",
      "crucial",
      "decision",
      "made",
      "the",
      "committee"
    ],
    "answer": "The committee made a crucial decision.",
    "explanationVi": "Câu này tuân theo cấu trúc chủ ngữ - động từ - tân ngữ. Cụm danh từ \"a crucial decision\" đóng vai trò tân ngữ, với \"crucial\" là tính từ bổ nghĩa cho danh từ \"decision\".",
    "sentenceVi": "Ủy ban đã đưa ra một quyết định quan trọng.",
    "vocabNotes": [
      {
        "word": "committee",
        "pos": "danh từ",
        "vi": "ủy ban"
      },
      {
        "word": "made",
        "pos": "động từ",
        "vi": "đã đưa ra"
      },
      {
        "word": "crucial",
        "pos": "tính từ",
        "vi": "quan trọng, cốt yếu"
      },
      {
        "word": "decision",
        "pos": "danh từ",
        "vi": "quyết định"
      }
    ]
  },
  {
    "id": "A1-bulk-006",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "pronoun",
      "possessive-pronoun"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The blue car isn't ours; I think it's ___ parked next to the minivan.",
    "options": [
      "their",
      "them",
      "theirs",
      "they"
    ],
    "answerIndex": 2,
    "explanationVi": "Chỗ trống cần một đại từ sở hữu để thay thế cho cụm danh từ sở hữu (their car) và đứng độc lập sau động từ \"it's\". \"Theirs\" là đại từ sở hữu tương ứng.",
    "sentenceVi": "Chiếc xe màu xanh không phải của chúng tôi; tôi nghĩ nó là của họ đậu cạnh chiếc minivan.",
    "vocabNotes": [
      {
        "word": "ours",
        "pos": "đại từ",
        "vi": "của chúng tôi"
      },
      {
        "word": "theirs",
        "pos": "đại từ",
        "vi": "của họ"
      },
      {
        "word": "minivan",
        "pos": "danh từ",
        "vi": "xe minivan (xe đa dụng cỡ nhỏ)"
      },
      {
        "word": "parked",
        "pos": "động từ",
        "vi": "đã đậu, đỗ"
      }
    ]
  },
  {
    "id": "A1-bulk-007",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "verb",
      "passive-voice",
      "future-tense"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new community center ___ by a local architectural firm next year.",
    "options": [
      "designs",
      "is designing",
      "will be designed",
      "designed"
    ],
    "answerIndex": 2,
    "explanationVi": "Chủ ngữ \"The new community center\" là đối tượng của hành động \"design\" (thiết kế), không phải chủ thể thực hiện hành động. Hơn nữa, có dấu hiệu thời gian \"next year\" (năm tới) cho thấy hành động sẽ diễn ra trong tương lai. Do đó, cần sử dụng thì tương lai đơn ở thể bị động: \"will be designed\".",
    "sentenceVi": "Trung tâm cộng đồng mới sẽ được thiết kế bởi một công ty kiến trúc địa phương vào năm tới.",
    "vocabNotes": [
      {
        "word": "community center",
        "pos": "cụm từ",
        "vi": "trung tâm cộng đồng"
      },
      {
        "word": "architectural firm",
        "pos": "cụm từ",
        "vi": "công ty kiến trúc"
      },
      {
        "word": "local",
        "pos": "tính từ",
        "vi": "địa phương"
      },
      {
        "word": "designed",
        "pos": "động từ",
        "vi": "được thiết kế"
      }
    ]
  },
  {
    "id": "A1-bulk-008",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conjunction",
      "cause-effect"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She decided to leave the party early ___ she wasn't feeling well.",
    "options": [
      "and",
      "but",
      "so",
      "because"
    ],
    "answerIndex": 3,
    "explanationVi": "Mệnh đề sau dấu gạch dưới giải thích lý do cho việc cô ấy rời bữa tiệc sớm. Vì vậy, ta dùng liên từ \"because\" để nối hai mệnh đề thể hiện quan hệ nguyên nhân - kết quả.",
    "sentenceVi": "Cô ấy quyết định rời bữa tiệc sớm vì cô ấy không cảm thấy khỏe.",
    "vocabNotes": [
      {
        "word": "decided",
        "pos": "động từ",
        "vi": "đã quyết định"
      },
      {
        "word": "party",
        "pos": "danh từ",
        "vi": "bữa tiệc"
      },
      {
        "word": "feeling well",
        "pos": "cụm từ",
        "vi": "cảm thấy khỏe"
      }
    ]
  },
  {
    "id": "A1-bulk-009",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "adjective",
      "word-formation"
    ],
    "prompt": "Điền dạng đúng của từ vào chỗ trống:",
    "sentence": "The organization is committed to promoting ___ development in rural areas.",
    "explanationVi": "Chỗ trống cần một tính từ để bổ nghĩa cho danh từ \"development\". Từ gốc \"sustain\" (động từ - duy trì) cần được chuyển thành dạng tính từ \"sustainable\" (bền vững).",
    "sentenceVi": "Tổ chức cam kết thúc đẩy sự phát triển bền vững ở các khu vực nông thôn.",
    "vocabNotes": [
      {
        "word": "organization",
        "pos": "danh từ",
        "vi": "tổ chức"
      },
      {
        "word": "committed to",
        "pos": "cụm từ",
        "vi": "cam kết"
      },
      {
        "word": "promoting",
        "pos": "động từ",
        "vi": "thúc đẩy"
      },
      {
        "word": "development",
        "pos": "danh từ",
        "vi": "sự phát triển"
      },
      {
        "word": "rural areas",
        "pos": "cụm từ",
        "vi": "khu vực nông thôn"
      }
    ],
    "options": [
      "economic",
      "regional",
      "social",
      "sustainable"
    ],
    "answerIndex": 3
  },
  {
    "id": "A1-bulk-010",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "adverb-phrase",
      "sentence-structure"
    ],
    "prompt": "Sắp xếp các từ để tạo thành câu hoàn chỉnh:",
    "tiles": [
      "remarkably",
      "the",
      "presented",
      "clearly",
      "findings",
      "researcher",
      "her"
    ],
    "answer": "The researcher presented her findings remarkably clearly.",
    "explanationVi": "Câu này có cấu trúc chủ ngữ - động từ - tân ngữ, sau đó là cụm trạng từ \"remarkably clearly\" để bổ nghĩa cho động từ \"presented\". \"Remarkably\" bổ nghĩa cho trạng từ \"clearly\".",
    "sentenceVi": "Nhà nghiên cứu đã trình bày kết quả của cô ấy một cách rõ ràng một cách đáng kể.",
    "vocabNotes": [
      {
        "word": "researcher",
        "pos": "danh từ",
        "vi": "nhà nghiên cứu"
      },
      {
        "word": "presented",
        "pos": "động từ",
        "vi": "đã trình bày"
      },
      {
        "word": "findings",
        "pos": "danh từ",
        "vi": "kết quả nghiên cứu"
      },
      {
        "word": "remarkably",
        "pos": "trạng từ",
        "vi": "đáng kể, nổi bật"
      },
      {
        "word": "clearly",
        "pos": "trạng từ",
        "vi": "một cách rõ ràng"
      }
    ]
  },
  {
    "id": "A1-bulk-011",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "parts-of-speech",
      "noun",
      "adjective",
      "adverb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The company aims to achieve greater ___ in its financial reporting.",
    "options": [
      "transparent",
      "transparently",
      "transparency",
      "transparence"
    ],
    "answerIndex": 2,
    "explanationVi": "Trong ngữ cảnh này, chúng ta cần một danh từ để hoàn thành cụm danh từ 'greater ___' (sự ... lớn hơn), bổ nghĩa cho 'greater'. 'Transparency' (tính minh bạch) là danh từ phù hợp nhất.",
    "sentenceVi": "Công ty đặt mục tiêu đạt được sự minh bạch lớn hơn trong báo cáo tài chính của mình.",
    "vocabNotes": [
      {
        "word": "achieve",
        "pos": "động từ",
        "vi": "đạt được"
      },
      {
        "word": "greater",
        "pos": "tính từ",
        "vi": "lớn hơn, cao hơn"
      },
      {
        "word": "transparency",
        "pos": "danh từ",
        "vi": "tính minh bạch"
      },
      {
        "word": "financial reporting",
        "pos": "cụm từ",
        "vi": "báo cáo tài chính"
      }
    ]
  },
  {
    "id": "A1-bulk-012",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "parts-of-speech",
      "verb-forms",
      "gerund"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Regular exercise is crucial for ___ a healthy lifestyle.",
    "options": [
      "maintain",
      "maintains",
      "maintaining",
      "maintained"
    ],
    "answerIndex": 2,
    "explanationVi": "Sau giới từ 'for', động từ phải ở dạng danh động từ (V-ing). 'Maintaining' là dạng V-ing của động từ 'maintain'.",
    "sentenceVi": "Tập thể dục thường xuyên rất quan trọng để duy trì một lối sống lành mạnh.",
    "vocabNotes": [
      {
        "word": "regular",
        "pos": "tính từ",
        "vi": "thường xuyên"
      },
      {
        "word": "crucial",
        "pos": "tính từ",
        "vi": "quan trọng, cốt yếu"
      },
      {
        "word": "maintaining",
        "pos": "danh động từ",
        "vi": "duy trì"
      },
      {
        "word": "healthy lifestyle",
        "pos": "cụm từ",
        "vi": "lối sống lành mạnh"
      }
    ]
  },
  {
    "id": "A1-bulk-013",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "parts-of-speech",
      "determiner",
      "countable-uncountable-nouns"
    ],
    "prompt": "Điền từ thích hợp vào chỗ trống:",
    "sentence": "There were ___ participants than expected at the academic conference.",
    "explanationVi": "Danh từ 'participants' (người tham gia) là danh từ đếm được số nhiều, vì vậy chúng ta dùng 'fewer' để chỉ số lượng ít hơn. 'Less' dùng cho danh từ không đếm được.",
    "sentenceVi": "Có ít người tham gia hơn dự kiến tại hội nghị học thuật.",
    "vocabNotes": [
      {
        "word": "participants",
        "pos": "danh từ",
        "vi": "người tham gia"
      },
      {
        "word": "expected",
        "pos": "tính từ",
        "vi": "được mong đợi/dự kiến"
      },
      {
        "word": "academic conference",
        "pos": "cụm từ",
        "vi": "hội nghị học thuật"
      }
    ],
    "options": [
      "more",
      "many",
      "less",
      "fewer"
    ],
    "answerIndex": 3
  },
  {
    "id": "A1-bulk-014",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 1,
    "tags": [
      "parts-of-speech",
      "adverb-placement",
      "sentence-structure"
    ],
    "prompt": "Sắp xếp các từ sau để tạo thành một câu hoàn chỉnh:",
    "tiles": [
      "the",
      "always",
      "efficiently",
      "team",
      "completes",
      "projects"
    ],
    "answer": "The team always completes projects efficiently.",
    "explanationVi": "Trong câu này, 'always' là trạng từ tần suất đứng trước động từ chính 'completes', và 'efficiently' là trạng từ chỉ cách thức bổ nghĩa cho động từ 'completes', đứng cuối câu.",
    "sentenceVi": "Nhóm luôn hoàn thành dự án một cách hiệu quả.",
    "vocabNotes": [
      {
        "word": "team",
        "pos": "danh từ",
        "vi": "đội, nhóm"
      },
      {
        "word": "always",
        "pos": "trạng từ",
        "vi": "luôn luôn"
      },
      {
        "word": "completes",
        "pos": "động từ",
        "vi": "hoàn thành"
      },
      {
        "word": "projects",
        "pos": "danh từ",
        "vi": "các dự án"
      },
      {
        "word": "efficiently",
        "pos": "trạng từ",
        "vi": "một cách hiệu quả"
      }
    ]
  },
  {
    "id": "A1-bulk-015",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "parts-of-speech",
      "pronoun-case",
      "object-pronoun"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The invitation was extended to both Sarah and ___ for the gala event.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ 'to', chúng ta cần một đại từ tân ngữ. 'Me' là đại từ tân ngữ của 'I'.",
    "sentenceVi": "Lời mời đã được gửi đến cả Sarah và tôi cho sự kiện dạ tiệc.",
    "vocabNotes": [
      {
        "word": "invitation",
        "pos": "danh từ",
        "vi": "lời mời"
      },
      {
        "word": "extended",
        "pos": "động từ",
        "vi": "mở rộng, gửi đến"
      },
      {
        "word": "gala event",
        "pos": "cụm từ",
        "vi": "sự kiện dạ tiệc"
      }
    ]
  },
  {
    "id": "A1-bulk-016",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "parts-of-speech",
      "adjective",
      "linking-verb",
      "adverb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Patients often feel surprisingly ___ after the innovative surgical procedure.",
    "options": [
      "comfort",
      "comfortable",
      "comfortably",
      "comforting"
    ],
    "answerIndex": 1,
    "explanationVi": "Động từ 'feel' là một linking verb (động từ nối), vì vậy theo sau nó là một tính từ để miêu tả trạng thái của chủ ngữ 'patients'. 'Surprisingly' là trạng từ bổ nghĩa cho tính từ 'comfortable'.",
    "sentenceVi": "Bệnh nhân thường cảm thấy thoải mái một cách đáng ngạc nhiên sau thủ thuật phẫu thuật đổi mới.",
    "vocabNotes": [
      {
        "word": "patients",
        "pos": "danh từ",
        "vi": "bệnh nhân"
      },
      {
        "word": "surprisingly",
        "pos": "trạng từ",
        "vi": "một cách đáng ngạc nhiên"
      },
      {
        "word": "comfortable",
        "pos": "tính từ",
        "vi": "thoải mái"
      },
      {
        "word": "innovative",
        "pos": "tính từ",
        "vi": "đổi mới, sáng tạo"
      },
      {
        "word": "surgical procedure",
        "pos": "cụm từ",
        "vi": "thủ thuật phẫu thuật"
      }
    ]
  },
  {
    "id": "A1-bulk-017",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "parts-of-speech",
      "preposition",
      "place"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We are scheduled to meet ___ the lobby of the hotel at 9 AM.",
    "options": [
      "at",
      "on",
      "in",
      "by"
    ],
    "answerIndex": 2,
    "explanationVi": "Để chỉ một địa điểm cụ thể bên trong một không gian kín, chúng ta sử dụng giới từ 'in'. 'In the lobby' có nghĩa là 'trong sảnh'.",
    "sentenceVi": "Chúng tôi dự kiến gặp nhau trong sảnh của khách sạn lúc 9 giờ sáng.",
    "vocabNotes": [
      {
        "word": "scheduled",
        "pos": "tính từ",
        "vi": "được lên lịch"
      },
      {
        "word": "meet",
        "pos": "động từ",
        "vi": "gặp gỡ"
      },
      {
        "word": "lobby",
        "pos": "danh từ",
        "vi": "sảnh"
      },
      {
        "word": "hotel",
        "pos": "danh từ",
        "vi": "khách sạn"
      }
    ]
  },
  {
    "id": "A1-bulk-018",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "parts-of-speech",
      "conjunction",
      "cause-effect"
    ],
    "prompt": "Điền từ thích hợp vào chỗ trống:",
    "sentence": "The experiment yielded unexpected results, ___ further investigation is required.",
    "explanationVi": "Liên từ 'so' được dùng để thể hiện kết quả hoặc hậu quả của một hành động hay sự việc. Trong câu này, kết quả của việc thí nghiệm cho ra kết quả bất ngờ là cần điều tra thêm.",
    "sentenceVi": "Thí nghiệm đã cho ra kết quả bất ngờ, vì vậy cần phải điều tra thêm.",
    "vocabNotes": [
      {
        "word": "experiment",
        "pos": "danh từ",
        "vi": "thí nghiệm"
      },
      {
        "word": "yielded",
        "pos": "động từ",
        "vi": "mang lại, sản xuất"
      },
      {
        "word": "unexpected",
        "pos": "tính từ",
        "vi": "bất ngờ"
      },
      {
        "word": "further investigation",
        "pos": "cụm từ",
        "vi": "điều tra thêm"
      },
      {
        "word": "required",
        "pos": "tính từ",
        "vi": "cần thiết"
      }
    ],
    "options": [
      "but",
      "however",
      "so",
      "therefore"
    ],
    "answerIndex": 2
  },
  {
    "id": "A1-bulk-019",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "parts-of-speech",
      "word-order",
      "adverb",
      "verb",
      "noun-phrase"
    ],
    "prompt": "Sắp xếp các từ sau để tạo thành một câu hoàn chỉnh:",
    "tiles": [
      "new",
      "has",
      "software",
      "significantly",
      "the",
      "improved",
      "system",
      "performance"
    ],
    "answer": "The new software has significantly improved system performance.",
    "explanationVi": "Câu này bắt đầu bằng cụm danh từ 'The new software' (chủ ngữ), theo sau là trợ động từ 'has', trạng từ 'significantly' bổ nghĩa cho động từ 'improved' (đã cải thiện đáng kể), và cuối cùng là cụm danh từ 'system performance' (hiệu suất hệ thống) làm tân ngữ.",
    "sentenceVi": "Phần mềm mới đã cải thiện đáng kể hiệu suất hệ thống.",
    "vocabNotes": [
      {
        "word": "software",
        "pos": "danh từ",
        "vi": "phần mềm"
      },
      {
        "word": "significantly",
        "pos": "trạng từ",
        "vi": "đáng kể"
      },
      {
        "word": "improved",
        "pos": "động từ",
        "vi": "cải thiện"
      },
      {
        "word": "system performance",
        "pos": "cụm từ",
        "vi": "hiệu suất hệ thống"
      }
    ]
  },
  {
    "id": "A1-bulk-020",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "parts-of-speech",
      "noun",
      "adjective",
      "suffix"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The committee will discuss the ___ of the new policy during the next meeting.",
    "options": [
      "effective",
      "effectively",
      "effectiveness",
      "effectual"
    ],
    "answerIndex": 2,
    "explanationVi": "Chỗ trống cần một danh từ vì đứng sau mạo từ 'the' và trước giới từ 'of'. 'Effectiveness' (hiệu quả) là danh từ phù hợp nhất, chỉ tính chất hoặc mức độ hiệu quả.",
    "sentenceVi": "Ủy ban sẽ thảo luận về tính hiệu quả của chính sách mới trong cuộc họp tiếp theo.",
    "vocabNotes": [
      {
        "word": "committee",
        "pos": "danh từ",
        "vi": "ủy ban"
      },
      {
        "word": "discuss",
        "pos": "động từ",
        "vi": "thảo luận"
      },
      {
        "word": "effectiveness",
        "pos": "danh từ",
        "vi": "tính hiệu quả"
      },
      {
        "word": "policy",
        "pos": "danh từ",
        "vi": "chính sách"
      }
    ]
  },
  {
    "id": "A1-bulk-021",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "noun-determiner",
      "countable-uncountable-noun"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The project required a significant ___ of dedication from the entire team.",
    "options": [
      "number",
      "amount",
      "many",
      "several"
    ],
    "answerIndex": 1,
    "explanationVi": "Từ 'dedication' (sự cống hiến) là danh từ không đếm được, vì vậy ta dùng 'amount' để chỉ số lượng. 'Number', 'many' và 'several' dùng cho danh từ đếm được.",
    "sentenceVi": "Dự án yêu cầu một lượng đáng kể sự cống hiến từ toàn bộ đội ngũ.",
    "vocabNotes": [
      {
        "word": "significant",
        "pos": "tính từ",
        "vi": "đáng kể"
      },
      {
        "word": "dedication",
        "pos": "danh từ",
        "vi": "sự cống hiến"
      },
      {
        "word": "amount",
        "pos": "danh từ",
        "vi": "lượng, số lượng"
      },
      {
        "word": "entire",
        "pos": "tính từ",
        "vi": "toàn bộ"
      }
    ]
  },
  {
    "id": "A1-bulk-022",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adjective-vs-adverb",
      "adverb-modifying-verb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new system operates very ___ and effectively.",
    "options": [
      "efficient",
      "efficiency",
      "efficiently",
      "more efficient"
    ],
    "answerIndex": 2,
    "explanationVi": "Chỗ trống cần một trạng từ để bổ nghĩa cho động từ 'operates' (vận hành) và liên kết với trạng từ 'effectively'. 'Efficiently' là trạng từ của 'efficient'.",
    "sentenceVi": "Hệ thống mới vận hành rất hiệu quả và có năng suất.",
    "vocabNotes": [
      {
        "word": "system",
        "pos": "danh từ",
        "vi": "hệ thống"
      },
      {
        "word": "operates",
        "pos": "động từ",
        "vi": "vận hành"
      },
      {
        "word": "efficiently",
        "pos": "trạng từ",
        "vi": "một cách hiệu quả, có năng suất"
      },
      {
        "word": "effectively",
        "pos": "trạng từ",
        "vi": "một cách hiệu nghiệm"
      }
    ]
  },
  {
    "id": "A1-bulk-023",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "verb-forms",
      "gerund"
    ],
    "prompt": "Hoàn thành câu sau:",
    "sentence": "We are committed to ___ sustainable practices in our operations.",
    "explanationVi": "Cụm 'be committed to' luôn theo sau bởi một danh động từ (Ving).",
    "sentenceVi": "Chúng tôi cam kết thực hiện các phương pháp bền vững trong hoạt động của mình.",
    "vocabNotes": [
      {
        "word": "committed to",
        "pos": "cụm từ",
        "vi": "cam kết với"
      },
      {
        "word": "sustainable",
        "pos": "tính từ",
        "vi": "bền vững"
      },
      {
        "word": "practices",
        "pos": "danh từ",
        "vi": "phương pháp, thực hành"
      },
      {
        "word": "operations",
        "pos": "danh từ",
        "vi": "hoạt động, vận hành"
      }
    ],
    "options": [
      "adopting",
      "maintaining",
      "implementing",
      "developing"
    ],
    "answerIndex": 2
  },
  {
    "id": "A1-bulk-024",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "pronoun",
      "possessive-pronoun"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This innovative approach to marketing is entirely different from ___.",
    "options": [
      "their",
      "theirs",
      "them",
      "they"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ 'from', ta cần một đại từ tân ngữ hoặc đại từ sở hữu. 'Theirs' là đại từ sở hữu, thay thế cho 'their approach' và phù hợp với ngữ cảnh so sánh.",
    "sentenceVi": "Cách tiếp cận đổi mới này trong tiếp thị hoàn toàn khác với của họ.",
    "vocabNotes": [
      {
        "word": "innovative",
        "pos": "tính từ",
        "vi": "đổi mới, sáng tạo"
      },
      {
        "word": "approach",
        "pos": "danh từ",
        "vi": "cách tiếp cận"
      },
      {
        "word": "entirely",
        "pos": "trạng từ",
        "vi": "hoàn toàn"
      },
      {
        "word": "theirs",
        "pos": "đại từ",
        "vi": "của họ"
      }
    ]
  },
  {
    "id": "A1-bulk-025",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conjunction",
      "cause-and-effect"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The flight was delayed ___ of the severe weather conditions.",
    "options": [
      "because",
      "due",
      "owing",
      "because of"
    ],
    "answerIndex": 3,
    "explanationVi": "Chỗ trống cần một giới từ hoặc cụm giới từ để nối với cụm danh từ 'the severe weather conditions'. 'Because of' là cụm giới từ chỉ nguyên nhân.",
    "sentenceVi": "Chuyến bay bị trì hoãn do điều kiện thời tiết khắc nghiệt.",
    "vocabNotes": [
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
        "word": "severe",
        "pos": "tính từ",
        "vi": "khắc nghiệt"
      },
      {
        "word": "weather conditions",
        "pos": "cụm từ",
        "vi": "điều kiện thời tiết"
      }
    ]
  },
  {
    "id": "A1-bulk-026",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "noun-phrase",
      "word-order"
    ],
    "prompt": "Sắp xếp các từ để tạo thành câu hoàn chỉnh và đúng ngữ pháp:",
    "tiles": [
      "innovative",
      "new",
      "digital",
      "solution",
      "for",
      "customers",
      "An"
    ],
    "answer": "An innovative new digital solution for customers.",
    "explanationVi": "Đây là một cụm danh từ với 'solution' là danh từ chính. Các tính từ 'innovative', 'new', 'digital' đứng trước bổ nghĩa cho danh từ, theo sau là cụm giới từ 'for customers'.",
    "sentenceVi": "Một giải pháp kỹ thuật số mới đầy sáng tạo dành cho khách hàng.",
    "vocabNotes": [
      {
        "word": "innovative",
        "pos": "tính từ",
        "vi": "sáng tạo"
      },
      {
        "word": "digital",
        "pos": "tính từ",
        "vi": "kỹ thuật số"
      },
      {
        "word": "solution",
        "pos": "danh từ",
        "vi": "giải pháp"
      },
      {
        "word": "for customers",
        "pos": "cụm giới từ",
        "vi": "dành cho khách hàng"
      }
    ]
  },
  {
    "id": "A1-bulk-027",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "verb-tense",
      "passive-voice"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All defective products ___ immediately after quality control inspection.",
    "options": [
      "replace",
      "are replacing",
      "are replaced",
      "will replace"
    ],
    "answerIndex": 2,
    "explanationVi": "Chủ ngữ 'All defective products' (Tất cả sản phẩm bị lỗi) là đối tượng chịu tác động của hành động 'replace' (thay thế), do đó câu cần chia ở thể bị động. Vì đây là một hành động mang tính thường xuyên hoặc quy trình, thì hiện tại đơn bị động 'are replaced' là phù hợp.",
    "sentenceVi": "Tất cả sản phẩm bị lỗi được thay thế ngay lập tức sau khi kiểm tra chất lượng.",
    "vocabNotes": [
      {
        "word": "defective",
        "pos": "tính từ",
        "vi": "bị lỗi"
      },
      {
        "word": "products",
        "pos": "danh từ",
        "vi": "sản phẩm"
      },
      {
        "word": "immediately",
        "pos": "trạng từ",
        "vi": "ngay lập tức"
      },
      {
        "word": "quality control",
        "pos": "cụm từ",
        "vi": "kiểm soát chất lượng"
      }
    ]
  },
  {
    "id": "A1-bulk-028",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "preposition-of-time"
    ],
    "prompt": "Hoàn thành câu sau:",
    "sentence": "The deadline for submission is set ___ Friday, March 15th.",
    "explanationVi": "Giới từ 'on' được sử dụng để chỉ ngày cụ thể hoặc ngày trong tuần.",
    "sentenceVi": "Hạn chót nộp bài được đặt vào Thứ Sáu, ngày 15 tháng 3.",
    "vocabNotes": [
      {
        "word": "deadline",
        "pos": "danh từ",
        "vi": "hạn chót"
      },
      {
        "word": "submission",
        "pos": "danh từ",
        "vi": "việc nộp bài"
      },
      {
        "word": "set",
        "pos": "động từ",
        "vi": "đặt, ấn định"
      },
      {
        "word": "March 15th",
        "pos": "cụm từ",
        "vi": "ngày 15 tháng 3"
      }
    ],
    "options": [
      "on",
      "at",
      "by",
      "in"
    ],
    "answerIndex": 0
  },
  {
    "id": "A1-bulk-029",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb-modifying-adjective"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The CEO was ___ impressed by the team's groundbreaking research.",
    "options": [
      "extreme",
      "extremely",
      "extremity",
      "extremist"
    ],
    "answerIndex": 1,
    "explanationVi": "Chỗ trống cần một trạng từ để bổ nghĩa cho tính từ 'impressed' (bị ấn tượng). 'Extremely' là trạng từ, mang nghĩa 'cực kỳ'.",
    "sentenceVi": "Giám đốc điều hành đã cực kỳ ấn tượng với nghiên cứu đột phá của nhóm.",
    "vocabNotes": [
      {
        "word": "CEO",
        "pos": "danh từ",
        "vi": "Giám đốc điều hành"
      },
      {
        "word": "impressed",
        "pos": "tính từ",
        "vi": "bị ấn tượng"
      },
      {
        "word": "extremely",
        "pos": "trạng từ",
        "vi": "cực kỳ"
      },
      {
        "word": "groundbreaking",
        "pos": "tính từ",
        "vi": "đột phá"
      },
      {
        "word": "research",
        "pos": "danh từ",
        "vi": "nghiên cứu"
      }
    ]
  },
  {
    "id": "A1-bulk-030",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "adverb-placement",
      "sentence-structure"
    ],
    "prompt": "Sắp xếp các từ để tạo thành câu hoàn chỉnh và đúng ngữ pháp:",
    "tiles": [
      "very",
      "the",
      "the",
      "clearly",
      "explained",
      "analyst",
      "complex",
      "data"
    ],
    "answer": "The analyst explained the complex data very clearly.",
    "explanationVi": "Câu này có cấu trúc chủ ngữ (The analyst), động từ (explained), tân ngữ (the complex data) và trạng từ chỉ cách thức (very clearly) bổ nghĩa cho động từ. Trạng từ 'very' bổ nghĩa cho trạng từ 'clearly'.",
    "sentenceVi": "Nhà phân tích đã giải thích dữ liệu phức tạp rất rõ ràng.",
    "vocabNotes": [
      {
        "word": "analyst",
        "pos": "danh từ",
        "vi": "nhà phân tích"
      },
      {
        "word": "explained",
        "pos": "động từ",
        "vi": "giải thích"
      },
      {
        "word": "complex",
        "pos": "tính từ",
        "vi": "phức tạp"
      },
      {
        "word": "data",
        "pos": "danh từ",
        "vi": "dữ liệu"
      },
      {
        "word": "clearly",
        "pos": "trạng từ",
        "vi": "rõ ràng"
      }
    ]
  },
  {
    "id": "A1-bulk-031",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "adverb",
      "modifier",
      "tech"
    ],
    "prompt": "Chọn đáp án phù hợp để hoàn thành câu:",
    "sentence": "The new software allows users to process data ___ and accurately.",
    "options": [
      "quick",
      "quickly",
      "quicker",
      "quickness"
    ],
    "answerIndex": 1,
    "explanationVi": "Chỗ trống cần một trạng từ để bổ nghĩa cho động từ “process” và liên kết với trạng từ “accurately” đã có. “Quickly” là trạng từ phù hợp.",
    "sentenceVi": "Phần mềm mới cho phép người dùng xử lý dữ liệu nhanh chóng và chính xác.",
    "vocabNotes": [
      {
        "word": "software",
        "pos": "danh từ",
        "vi": "phần mềm"
      },
      {
        "word": "process data",
        "pos": "cụm từ",
        "vi": "xử lý dữ liệu"
      },
      {
        "word": "accurately",
        "pos": "trạng từ",
        "vi": "một cách chính xác"
      }
    ]
  },
  {
    "id": "A1-bulk-032",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "noun",
      "determiner",
      "uncountable-noun",
      "business"
    ],
    "prompt": "Chọn từ hạn định phù hợp:",
    "sentence": "The marketing campaign generated ___ interest among potential customers.",
    "options": [
      "many",
      "a few",
      "much",
      "several"
    ],
    "answerIndex": 2,
    "explanationVi": "Danh từ “interest” (sự quan tâm) là danh từ không đếm được, do đó cần sử dụng từ hạn định “much” để bổ nghĩa cho nó.",
    "sentenceVi": "Chiến dịch tiếp thị đã tạo ra nhiều sự quan tâm giữa các khách hàng tiềm năng.",
    "vocabNotes": [
      {
        "word": "marketing campaign",
        "pos": "cụm từ",
        "vi": "chiến dịch tiếp thị"
      },
      {
        "word": "generated",
        "pos": "động từ",
        "vi": "tạo ra, gây ra"
      },
      {
        "word": "interest",
        "pos": "danh từ",
        "vi": "sự quan tâm"
      },
      {
        "word": "potential customers",
        "pos": "cụm từ",
        "vi": "khách hàng tiềm năng"
      }
    ]
  },
  {
    "id": "A1-bulk-033",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "verb-form",
      "gerund",
      "health"
    ],
    "prompt": "Điền vào chỗ trống một danh động từ phù hợp:",
    "sentence": "___ regularly is essential for maintaining good health.",
    "explanationVi": "Chỗ trống cần một danh động từ (gerund) đóng vai trò chủ ngữ trong câu. “Exercising” là dạng danh động từ của động từ “exercise”.",
    "sentenceVi": "Tập thể dục thường xuyên là điều cần thiết để duy trì sức khỏe tốt.",
    "vocabNotes": [
      {
        "word": "regularly",
        "pos": "trạng từ",
        "vi": "thường xuyên"
      },
      {
        "word": "essential",
        "pos": "tính từ",
        "vi": "cần thiết, thiết yếu"
      },
      {
        "word": "maintaining",
        "pos": "động từ",
        "vi": "duy trì"
      }
    ],
    "options": [
      "Sleeping",
      "Meditating",
      "Eating",
      "Exercising"
    ],
    "answerIndex": 3
  },
  {
    "id": "A1-bulk-034",
    "topicId": "A1",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "noun-phrase",
      "word-order",
      "academic"
    ],
    "prompt": "Sắp xếp các từ sau thành một câu hoàn chỉnh:",
    "tiles": [
      "an",
      "professional",
      "economic",
      "trends",
      "seasoned",
      "gave",
      "insightful",
      "on",
      "a",
      "presentation"
    ],
    "answer": "A seasoned professional gave an insightful presentation on economic trends.",
    "explanationVi": "Câu hoàn chỉnh với cấu trúc chủ ngữ (A seasoned professional) + động từ (gave) + tân ngữ (an insightful presentation) + cụm giới từ (on economic trends).",
    "sentenceVi": "Một chuyên gia dày dặn kinh nghiệm đã có một bài thuyết trình sâu sắc về các xu hướng kinh tế.",
    "vocabNotes": [
      {
        "word": "seasoned",
        "pos": "tính từ",
        "vi": "dày dặn kinh nghiệm"
      },
      {
        "word": "professional",
        "pos": "danh từ",
        "vi": "chuyên gia"
      },
      {
        "word": "insightful",
        "pos": "tính từ",
        "vi": "sâu sắc"
      },
      {
        "word": "presentation",
        "pos": "danh từ",
        "vi": "bài thuyết trình"
      },
      {
        "word": "economic trends",
        "pos": "cụm từ",
        "vi": "xu hướng kinh tế"
      }
    ]
  },
  {
    "id": "A1-bulk-035",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "verb",
      "tense",
      "present-perfect",
      "business"
    ],
    "prompt": "Chọn thì động từ phù hợp:",
    "sentence": "The company ___ its global market share steadily over the past five years.",
    "options": [
      "increased",
      "is increasing",
      "has increased",
      "increases"
    ],
    "answerIndex": 2,
    "explanationVi": "Cụm từ “over the past five years” chỉ một hành động bắt đầu trong quá khứ và tiếp diễn đến hiện tại, hoặc kết quả còn ảnh hưởng đến hiện tại. Vì vậy, thì hiện tại hoàn thành (has increased) là phù hợp nhất.",
    "sentenceVi": "Công ty đã và đang tăng thị phần toàn cầu một cách ổn định trong năm năm qua.",
    "vocabNotes": [
      {
        "word": "global market share",
        "pos": "cụm từ",
        "vi": "thị phần toàn cầu"
      },
      {
        "word": "steadily",
        "pos": "trạng từ",
        "vi": "một cách ổn định"
      },
      {
        "word": "over the past five years",
        "pos": "cụm từ",
        "vi": "trong năm năm qua"
      }
    ]
  },
  {
    "id": "A1-bulk-036",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "pronoun",
      "possessive-pronoun",
      "daily"
    ],
    "prompt": "Chọn đại từ phù hợp:",
    "sentence": "My laptop is in the bag, but where is ___?",
    "options": [
      "your",
      "yours",
      "you",
      "your's"
    ],
    "answerIndex": 1,
    "explanationVi": "Chỗ trống cần một đại từ sở hữu để thay thế cho “your laptop” và đóng vai trò như một danh từ. “Yours” là đại từ sở hữu tương ứng với “you”.",
    "sentenceVi": "Máy tính xách tay của tôi ở trong túi, nhưng của bạn đâu?",
    "vocabNotes": [
      {
        "word": "laptop",
        "pos": "danh từ",
        "vi": "máy tính xách tay"
      },
      {
        "word": "bag",
        "pos": "danh từ",
        "vi": "túi"
      }
    ]
  },
  {
    "id": "A1-bulk-037",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conjunction",
      "clause-linking",
      "academic"
    ],
    "prompt": "Chọn liên từ phù hợp để nối hai mệnh đề:",
    "sentence": "The research findings were compelling, ___ further studies are needed to confirm the results.",
    "options": [
      "so",
      "because",
      "although",
      "therefore"
    ],
    "answerIndex": 2,
    "explanationVi": "Hai mệnh đề thể hiện sự đối lập: kết quả nghiên cứu thuyết phục nhưng vẫn cần nghiên cứu thêm. “Although” là liên từ phù hợp nhất để diễn tả sự tương phản này.",
    "sentenceVi": "Mặc dù các phát hiện nghiên cứu rất thuyết phục, nhưng vẫn cần thêm các nghiên cứu để xác nhận kết quả.",
    "vocabNotes": [
      {
        "word": "research findings",
        "pos": "cụm từ",
        "vi": "kết quả nghiên cứu"
      },
      {
        "word": "compelling",
        "pos": "tính từ",
        "vi": "thuyết phục, hấp dẫn"
      },
      {
        "word": "further studies",
        "pos": "cụm từ",
        "vi": "nghiên cứu thêm"
      },
      {
        "word": "confirm",
        "pos": "động từ",
        "vi": "xác nhận"
      }
    ]
  },
  {
    "id": "A1-bulk-038",
    "topicId": "A1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "preposition",
      "time",
      "place",
      "travel"
    ],
    "prompt": "Chọn cặp giới từ phù hợp để hoàn thành câu:",
    "sentence": "We arrived ___ the hotel just ___ sunset, eager to check in.",
    "options": [
      "at / before",
      "in / on",
      "on / by",
      "to / around"
    ],
    "answerIndex": 0,
    "explanationVi": "Giới từ “at” được dùng để chỉ địa điểm cụ thể (at the hotel). Giới từ “before” được dùng để chỉ thời điểm (before sunset).",
    "sentenceVi": "Chúng tôi đến khách sạn ngay trước khi mặt trời lặn, háo hức làm thủ tục nhận phòng.",
    "vocabNotes": [
      {
        "word": "arrived",
        "pos": "động từ",
        "vi": "đã đến"
      },
      {
        "word": "eager to",
        "pos": "cụm từ",
        "vi": "háo hức làm gì"
      },
      {
        "word": "check in",
        "pos": "cụm từ",
        "vi": "làm thủ tục nhận phòng"
      },
      {
        "word": "sunset",
        "pos": "danh từ",
        "vi": "hoàng hôn"
      }
    ]
  }
];
