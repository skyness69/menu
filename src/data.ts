export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  price: string;
  description?: string;
}

export interface MenuSubCategory {
  titleAr: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  titleAr: string;
  titleEn: string;
  subCategories: MenuSubCategory[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'western-cuisine',
    titleAr: 'المطبخ الغربي',
    titleEn: 'WESTERN CUISINE',
    subCategories: [
      {
        titleAr: 'اطباق غربية',
        items: [
          { 
            id: 'w1', 
            nameAr: 'ستيك لحم', 
            nameEn: 'Beef Steak', 
            price: '24,000',
            description: 'لحم مشوي + خضار سوتيه + صوص حسب الطلب + ماش بوتيتو'
          },
          { 
            id: 'w2', 
            nameAr: 'بيكاتا لحم بالليمون', 
            nameEn: 'Lemon Beef Piccata', 
            price: '25,000',
            description: 'لحم مشوي + خضار سوتيه + ماش بوتيتو + صوص ليمون'
          },
          { 
            id: 'w3', 
            nameAr: 'بيف غصن الرمان', 
            nameEn: 'Ghusn Al-Rumaan Beef', 
            price: '26,000',
            description: 'رول لحم محشي + صوص مرينارة + خضار + نيوشي بوتيتو'
          },
          { 
            id: 'w4', 
            nameAr: 'تشكن كوردن بلو', 
            nameEn: 'Chicken Cordon Bleu', 
            price: '20,000',
            description: 'دجاج محشي + خضار سوتيه + ماش بوتيتو + وايت صوص'
          },
          { 
            id: 'w5', 
            nameAr: 'تشكن كاري', 
            nameEn: 'Chicken Curry', 
            price: '19,000',
            description: 'دجاج كيوب مطبوخ مع الخضار والكريمة + ارز بخاري'
          },
          { 
            id: 'w6', 
            nameAr: 'تشكن ميلانيز', 
            nameEn: 'Chicken Milanese', 
            price: '21,000',
            description: 'دجاج سكالوب مغطى بالصوص والجبن + سباغيتي ارياتا'
          },
          { 
            id: 'w7', 
            nameAr: 'تشكن غصن الرمان', 
            nameEn: 'Ghusn Al-Rumaan Chicken', 
            price: '22,000',
            description: 'دجاج مشوي محشي سبانخ + خضار سوتيه + نيوشي بوتيتو + صوص اومينا سبانخ'
          },
          { 
            id: 'w8', 
            nameAr: 'فخارة دجاج', 
            nameEn: 'Chicken Clay Pot', 
            price: '18,000',
            description: 'دجاج مطبوخ مع الخضار بالفخار + تمن'
          },
          { 
            id: 'w9', 
            nameAr: 'فخارة لحم', 
            nameEn: 'Meat Clay Pot', 
            price: '22,000',
            description: 'لحم مطبوخ مع الخضار بالفخار + تمن'
          },
        ]
      }
    ]
  },
  {
    id: 'breakfast-soup',
    titleAr: 'الفطور والشوربات',
    titleEn: 'BREAKFAST & SOUPS',
    subCategories: [
      {
        titleAr: 'الفطور',
        items: [
          { 
            id: 'b1', 
            nameAr: 'سيت منيو غصن الرمان (4 اشخاص)', 
            nameEn: 'Ghusn Al-Rumaan Set Menu (4 Pax)', 
            price: '45,000',
            description: 'تشكيلة من الاجبان والالبان + عسل وقيمر + مخلمة + بيض + زيتون + شاي'
          },
          { 
            id: 'b2', 
            nameAr: 'سيت منيو غصن الرمان (شخصين)', 
            nameEn: 'Ghusn Al-Rumaan Set Menu (2 Pax)', 
            price: '28,000',
            description: 'تشكيلة فطور شرقية متكاملة مع الشاي'
          },
          { 
            id: 'b3', 
            nameAr: 'بيض اومليت', 
            nameEn: 'Omelette', 
            price: '5,000',
            description: 'بيض مخفوق مطهو بالزبدة مع اختيارك من الخضار'
          },
          { 
            id: 'b4', 
            nameAr: 'مخلمة طماطم', 
            nameEn: 'Tomato Makhlama', 
            price: '5,000',
            description: 'بيض مع الطماطم الطازجة والتوابل العراقية'
          },
          { 
            id: 'b5', 
            nameAr: 'مخلمة لحم', 
            nameEn: 'Meat Makhlama', 
            price: '6,000',
            description: 'لحم مفروم مع البيض والبصل والبهارات'
          },
        ]
      },
      {
        titleAr: 'الشوربات',
        items: [
          { 
            id: 's1', 
            nameAr: 'شوربة خضار', 
            nameEn: 'Vegetable Soup', 
            price: '5,000',
            description: 'مزيج من الخضار الطازجة المطهوة ببطء'
          },
          { 
            id: 's2', 
            nameAr: 'شوربة عدس', 
            nameEn: 'Lentil Soup', 
            price: '5,000',
            description: 'عدس اصفر مطحون مع الكمون والخبز المحمص'
          },
          { 
            id: 's3', 
            nameAr: 'شوربة فطر', 
            nameEn: 'Mushroom Soup', 
            price: '5,000',
            description: 'فطر طازج مع الكريمة الغنية'
          },
        ]
      }
    ]
  },
  {
    id: 'appetizers-salads',
    titleAr: 'المقبلات والسلطات',
    titleEn: 'APPETIZERS & SALADS',
    subCategories: [
      {
        titleAr: 'المقبلات الباردة',
        items: [
          { 
            id: 'a1', 
            nameAr: 'حمص بطحينة', 
            nameEn: 'Hummus', 
            price: '4,000',
            description: 'حمص مسلوق ومطحون مع الطحينة وزيت الزيتون'
          },
          { 
            id: 'a2', 
            nameAr: 'متبل باذنجان', 
            nameEn: 'Mutabal', 
            price: '4,000',
            description: 'باذنجان مشوي مع الطحينة والزبادي'
          },
          { 
            id: 'a3', 
            nameAr: 'جاجيك', 
            nameEn: 'Jajik', 
            price: '4,000',
            description: 'زبادي مع الخيار المفروم والنعناع'
          },
        ]
      },
      {
        titleAr: 'السلطات',
        items: [
          { 
            id: 'sl1', 
            nameAr: 'سلطة غصن الرمان', 
            nameEn: 'Ghusn Al-Rumaan Salad', 
            price: '8,000',
            description: 'سلطة خضراء مع دبس الرمان والجوز وحبات الرمان'
          },
          { 
            id: 'sl2', 
            nameAr: 'تبولة', 
            nameEn: 'Tabbouleh', 
            price: '6,000',
            description: 'بقدونس مفروم مع البرغل والطماطم والليمون'
          },
          { 
            id: 'sl3', 
            nameAr: 'فتوش', 
            nameEn: 'Fattoush', 
            price: '6,000',
            description: 'خضار مشكلة مع الخبز المحمص والسماق'
          },
        ]
      }
    ]
  }
];
