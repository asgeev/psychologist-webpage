import Section from '@/components/molecules/Section';

export default function AboutMe() {
  return (
    <Section index={1} title={'O mnie'} id="o-mnie">
      <div className="text-muted-foreground">
        <p>
          Jestem psychologiem i terapeutą, oferującym wsparcie dzieciom, młodzieży oraz ich
          rodzicom. Ukończyłam psychologię na Uniwersytecie Marii Curie-Skłodowskiej w Lublinie, a
          moje kompetencje terapeutyczne rozwijałam na wielu dodatkowych szkoleniach. Posiadam
          certyfikat pierwszego stopnia Terapii Skoncentrowanej na Rozwiązaniach oraz ukończyłam
          kurs podstaw arteterapii. Zrealizowałam również studia podyplomowe w zakresie mediacji
          szkolnej i sądowej. Moje doświadczenie zawodowe zdobywałam m.in. w Szkole Podstawowej jako
          asystent ucznia z niepełnosprawnością, oraz w Środowiskowym Domu Samopomocy, gdzie
          prowadziłam terapię i udzielałam wsparcia rodzinom osób z niepełnosprawnością
          intelektualną.
        </p>
        <br></br>
        <p>
          Aktualnie prowadzę terapię oraz konsultacje w Poradni Psychologiczno-Psychiatrycznej dla
          Dzieci i Młodzieży, jak również w Poradni dla Osób z Autyzmem. W pracy terapeutycznej
          stawiam na otwartość, zrozumienie i akceptację. Tworzę przestrzeń, w której każdy może
          poczuć się bezpiecznie, wysłuchany i gotowy do odkrywania swojego potencjału. Pracuję z
          dziećmi od 6. roku życia, młodzieżą oraz rodzicami, wspierając ich w rozwoju kompetencji
          wychowawczych. Nieustannie dbam o swój rozwój zawodowy, uczestnicząc w szkoleniach i
          kursach. Poszerzam swoją wiedzę, aby jak najlepiej wspierać moich klientów i rozumieć ich
          potrzeby.
        </p>
      </div>
    </Section>
  );
}
