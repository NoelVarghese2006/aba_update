"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import MediaQuery from "react-responsive"

// const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

function Beliefs() {
  return (
    <div className="flex flex-col">
    <h1 className="flex justify-center text-2xl">We Believe: </h1>
    <div className="p-4">
      <div>That the Bible is the inspired Word of God and is the final authority for all matters of faith, life, and conduct.  
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(2 Timothy 3:16-17,</HoverCardTrigger>
            <HoverCardContent>
              &apos;All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(2 Timothy 3:16-17,</PopoverTrigger>
            <PopoverContent>
              &apos;All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;2 Peter 1:21,</HoverCardTrigger>
            <HoverCardContent>
              &apos;for prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;2 Peter 1:21,</PopoverTrigger>
            <PopoverContent>
              &apos;for prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;John 17:17)</HoverCardTrigger>
            <HoverCardContent>
              &apos;Sanctify them by Your truth. Your word is truth.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;John 17:17)</PopoverTrigger>
            <PopoverContent>
              &apos;Sanctify them by Your truth. Your word is truth.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div className="my-4">That the Godhead eternally exists in three persons – the Father, the Son, and the Holy Spirit. God is our Creator, Redeemer, and Sustainer. 
          <MediaQuery minWidth={600}>
            <HoverCard>
              <HoverCardTrigger>&nbsp;(Matthew 28:19,</HoverCardTrigger>
              <HoverCardContent>
                &apos;Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,&apos; (NKJV)  
              </HoverCardContent>
            </HoverCard>
          </MediaQuery>
          <MediaQuery maxWidth={600}>
            <Popover>
              <PopoverTrigger>&nbsp;(Matthew 28:19,</PopoverTrigger>
              <PopoverContent>
                &apos;Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,&apos; (NKJV)
              </PopoverContent>
            </Popover>
          </MediaQuery>

          <MediaQuery minWidth={600}>
            <HoverCard>
              <HoverCardTrigger>&nbsp;2 Corinthians 13:14,</HoverCardTrigger>
              <HoverCardContent>
                &apos;The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Spirit be with you all. Amen.&apos; (NKJV)
              </HoverCardContent>
            </HoverCard>
          </MediaQuery>
          <MediaQuery maxWidth={600}>
            <Popover>
              <PopoverTrigger>&nbsp;2 Corinthians 13:14,</PopoverTrigger>
              <PopoverContent>
                &apos;The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Spirit be with you all. Amen.&apos; (NKJV)
              </PopoverContent>
            </Popover>
          </MediaQuery>

          <MediaQuery minWidth={600}>
            <HoverCard>
              <HoverCardTrigger>&nbsp;James 1:17)</HoverCardTrigger>
              <HoverCardContent>
                &apos;Every good gift and every perfect gift is from above, and comes down from the Father of lights, with whom there is no variation or shadow of turning.&apos; (NKJV)
              </HoverCardContent>
            </HoverCard>
          </MediaQuery>
          <MediaQuery maxWidth={600}>
            <Popover>
              <PopoverTrigger>&nbsp;James 1:17)</PopoverTrigger>
              <PopoverContent>
                &apos;Every good gift and every perfect gift is from above, and comes down from the Father of lights, with whom there is no variation or shadow of turning.&apos; (NKJV) 
              </PopoverContent>
            </Popover>
          </MediaQuery>
      </div>
      <div className="my-4">That man was created in the image of God and fell in sin by disobedience. 
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(Genesis 2:17,</HoverCardTrigger>
            <HoverCardContent>
              &apos;but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.”&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(Genesis 2:17,</PopoverTrigger>
            <PopoverContent>
              &apos;but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.”&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;Romans 5:18,</HoverCardTrigger>
            <HoverCardContent>
              &apos;Therefore, as through one man’s offense judgment came to all men, resulting in condemnation, even so through one Man’s righteous act the free gift came to all men, resulting in justification of life.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;Romans 5:18,</PopoverTrigger>
            <PopoverContent>
              &apos;Therefore, as through one man’s offense judgment came to all men, resulting in condemnation, even so through one Man’s righteous act the free gift came to all men, resulting in justification of life.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;Ephesians 2:1-3)</HoverCardTrigger>
            <HoverCardContent>
              &apos;And you He made alive, who were dead in trespasses and sins, in which you once walked according to the course of this world, according to the prince of the power of the air, the spirit who now works in the sons of disobedience, among whom also we all once conducted ourselves in the lusts of our flesh, fulfilling the desires of the flesh and of the mind, and were by nature children of wrath, just as the others.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;Ephesians 2:1-3)</PopoverTrigger>
            <PopoverContent>
              &apos;And you He made alive, who were dead in trespasses and sins, in which you once walked according to the course of this world, according to the prince of the power of the air, the spirit who now works in the sons of disobedience, among whom also we all once conducted ourselves in the lusts of our flesh, fulfilling the desires of the flesh and of the mind, and were by nature children of wrath, just as the others.&apos; (NKJV)  
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div className="my-4">In the virgin birth of the Lord Jesus Christ and that He is the only Savior. 
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(John 3:16,</HoverCardTrigger>
            <HoverCardContent>
              &apos;For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(John 3:16,</PopoverTrigger>
            <PopoverContent>
              &apos;For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;John 14:6,</HoverCardTrigger>
            <HoverCardContent>
              &apos;Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;John 14:6,</PopoverTrigger>
            <PopoverContent>
              &apos;Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;Ephesians 2:1-3)</HoverCardTrigger>
            <HoverCardContent>
              &apos;Nor is there salvation in any other, for there is no other name under heaven given among men by which we must be saved.”&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;Acts 4:12)</PopoverTrigger>
            <PopoverContent>
              &apos;Nor is there salvation in any other, for there is no other name under heaven given among men by which we must be saved.”&apos; (NKJV)  
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div className="my-4">That salvation is by grace through faith and not of works. Salvation is the gift of God and is eternally secure. 
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(Ephesians 2:8-9,</HoverCardTrigger>
            <HoverCardContent>
              &apos;For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(Ephesians 2:8-9,</PopoverTrigger>
            <PopoverContent>
              &apos;For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;John 10:28,</HoverCardTrigger>
            <HoverCardContent>
              &apos;And I give them eternal life, and they shall never perish; neither shall anyone snatch them out of My hand.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;John 10:28,</PopoverTrigger>
            <PopoverContent>
              &apos;And I give them eternal life, and they shall never perish; neither shall anyone snatch them out of My hand.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;Romans 8:38-39)</HoverCardTrigger>
            <HoverCardContent>
              &apos;For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, 39 nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;Romans 8:38-39)</PopoverTrigger>
            <PopoverContent>
              &apos;For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, 39 nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.&apos; (NKJV)  
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div className="my-4">That the Church is the body of Christ, which began on the day of Pentecost with Jesus Christ as the head. The Church is entrusted with the ministries of worship, edification, and evangelism. 
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(Acts 2:14-47,</HoverCardTrigger>
            <HoverCardContent>
              Due to the length of the passage, please read it on your own.
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(Acts 2:14-47,</PopoverTrigger>
            <PopoverContent>
              Due to the length of the passage, please read it on your own.
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;Ephesians 2:20-23)</HoverCardTrigger>
            <HoverCardContent>
              &apos;having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone, in whom the whole building, being fitted together, grows into a holy temple in the Lord, in whom you also are being built together for a dwelling place of God in the Spirit.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;Ephesians 2:20-23)</PopoverTrigger>
            <PopoverContent>
              &apos;having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone, in whom the whole building, being fitted together, grows into a holy temple in the Lord, in whom you also are being built together for a dwelling place of God in the Spirit.&apos; (NKJV)&apos;And I give them eternal life, and they shall never perish; neither shall anyone snatch them out of My hand.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div className="my-4">That baptism and the Lord’s Supper are the only ordinances of the Church instituted by Jesus Christ. 
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(Matthew 28:19,</HoverCardTrigger>
            <HoverCardContent>
              &apos;Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(Matthew 28:19,</PopoverTrigger>
            <PopoverContent>
              &apos;Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;1 Corinthians 11:23-26)</HoverCardTrigger>
            <HoverCardContent>
              &apos;For I received from the Lord that which I also delivered to you: that the Lord Jesus on the same night in which He was betrayed took bread; and when He had given thanks, He broke it and said, “Take, eat; this is My body which is broken for you; do this in remembrance of Me.” In the same manner He also took the cup after supper, saying, “This cup is the new covenant in My blood. This do, as often as you drink it, in remembrance of Me.” For as often as you eat this bread and drink this cup, you proclaim the Lord’s death till He comes.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;1 Corinthians 11:23-26)</PopoverTrigger>
            <PopoverContent>
              &apos;For I received from the Lord that which I also delivered to you: that the Lord Jesus on the same night in which He was betrayed took bread; and when He had given thanks, He broke it and said, “Take, eat; this is My body which is broken for you; do this in remembrance of Me.” In the same manner He also took the cup after supper, saying, “This cup is the new covenant in My blood. This do, as often as you drink it, in remembrance of Me.” For as often as you eat this bread and drink this cup, you proclaim the Lord’s death till He comes.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div className="my-4">That the Holy Spirit indwells every believer upon belief in the Lord Jesus.
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(Acts 2:1-4,</HoverCardTrigger>
            <HoverCardContent>
              &apos;When the Day of Pentecost had fully come, they were all with one accord in one place. And suddenly there came a sound from heaven, as of a rushing mighty wind, and it filled the whole house where they were sitting. Then there appeared to them divided tongues, as of fire, and one sat upon each of them. And they were all filled with the Holy Spirit and began to speak with other tongues, as the Spirit gave them utterance.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(Acts 2:1-4,</PopoverTrigger>
            <PopoverContent>
              &apos;When the Day of Pentecost had fully come, they were all with one accord in one place. And suddenly there came a sound from heaven, as of a rushing mighty wind, and it filled the whole house where they were sitting. Then there appeared to them divided tongues, as of fire, and one sat upon each of them. And they were all filled with the Holy Spirit and began to speak with other tongues, as the Spirit gave them utterance.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>

        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;Romans 8:9)</HoverCardTrigger>
            <HoverCardContent>
             &apos;But you are not in the flesh but in the Spirit, if indeed the Spirit of God dwells in you. Now if anyone does not have the Spirit of Christ, he is not His.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;Romans 8:9)</PopoverTrigger>
            <PopoverContent>
              &apos;But you are not in the flesh but in the Spirit, if indeed the Spirit of God dwells in you. Now if anyone does not have the Spirit of Christ, he is not His.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div className="my-4">That the Lord Jesus Christ has commissioned His Church to proclaim the Gospel to all people and make disciples of all nations. 
        <MediaQuery minWidth={600}>
          <HoverCard>
            <HoverCardTrigger>&nbsp;(Matthew 28:18-20)</HoverCardTrigger>
            <HoverCardContent>
             &apos;And Jesus came and spoke to them, saying, “All authority has been given to Me in heaven and on earth. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age.” Amen.&apos; (NKJV)
            </HoverCardContent>
          </HoverCard>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Popover>
            <PopoverTrigger>&nbsp;(Matthew 28:18-20)</PopoverTrigger>
            <PopoverContent>
              &apos;And Jesus came and spoke to them, saying, “All authority has been given to Me in heaven and on earth. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age.” Amen.&apos; (NKJV)
            </PopoverContent>
          </Popover>
        </MediaQuery>
      </div>
      <div>That the Church will be raptured, followed by the Great Tribulation and Christ’s return to the earth to establish His Millennial Kingdom. 

        <MediaQuery minWidth={600}>
            <HoverCard>
              <HoverCardTrigger>&nbsp;(Matthew 24:15-30,</HoverCardTrigger>
              <HoverCardContent>
                Due to the length of the passage, please read this passage on your own.  
              </HoverCardContent>
            </HoverCard>
          </MediaQuery>
          <MediaQuery maxWidth={600}>
            <Popover>
              <PopoverTrigger>&nbsp;(Matthew 24:15-30,</PopoverTrigger>
              <PopoverContent>
                Due to the length of the passage, please read this passage on your own.
              </PopoverContent>
            </Popover>
          </MediaQuery>

          <MediaQuery minWidth={600}>
            <HoverCard>
              <HoverCardTrigger>&nbsp;1 Thessalonians 4:16-17,</HoverCardTrigger>
              <HoverCardContent>
                &apos;For the Lord Himself will descend from heaven with a shout, with the voice of an archangel, and with the trumpet of God. And the dead in Christ will rise first. 17 Then we who are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air. And thus we shall always be with the Lord.&apos; (NKJV)
              </HoverCardContent>
            </HoverCard>
          </MediaQuery>
          <MediaQuery maxWidth={600}>
            <Popover>
              <PopoverTrigger>&nbsp;1 Thessalonians 4:16-17,</PopoverTrigger>
              <PopoverContent>
                &apos;For the Lord Himself will descend from heaven with a shout, with the voice of an archangel, and with the trumpet of God. And the dead in Christ will rise first. 17 Then we who are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air. And thus we shall always be with the Lord.&apos; (NKJV)
              </PopoverContent>
            </Popover>
          </MediaQuery>

          <MediaQuery minWidth={600}>
            <HoverCard>
              <HoverCardTrigger>&nbsp;Revelation 20:4-6)</HoverCardTrigger>
              <HoverCardContent>
               &apos;And I saw thrones, and they sat on them, and judgment was committed to them. Then I saw the souls of those who had been beheaded for their witness to Jesus and for the word of God, who had not worshiped the beast or his image, and had not received his mark on their foreheads or on their hands. And they lived and reigned with Christ for a thousand years. But the rest of the dead did not live again until the thousand years were finished. This is the first resurrection. Blessed and holy is he who has part in the first resurrection. Over such the second death has no power, but they shall be priests of God and of Christ, and shall reign with Him a thousand years.&apos; (NKJV)
              </HoverCardContent>
            </HoverCard>
          </MediaQuery>
          <MediaQuery maxWidth={600}>
            <Popover>
              <PopoverTrigger>&nbsp;Revelation 20:4-6)</PopoverTrigger>
              <PopoverContent>
                &apos;And I saw thrones, and they sat on them, and judgment was committed to them. Then I saw the souls of those who had been beheaded for their  witness to Jesus and for the word of God, who had not worshiped the beast or his image, and had not received his mark on their foreheads or on their hands. And they lived and reigned with Christ for a thousand years. But the rest of the dead did not live again until the thousand years were finished. This is the first resurrection. Blessed and holy is he who has part in the first resurrection. Over such the second death has no power, but they shall be priests of God and of Christ, and shall reign with Him a thousand years.&apos; (NKJV)
              </PopoverContent>
            </Popover>
          </MediaQuery>
      </div>
    </div>
    </div>
  )
}

export default Beliefs