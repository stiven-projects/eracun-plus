package hr.stiven.eracunplus.rest.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;

@Builder
public record Sudionik(
        @Size(max = 255, message = "Naziv tvrtke može sadržavati najviše 255 znakova")
        @NotNull(message = "Naziv tvrtke je obavezan") String nazivTvrtke,
        @Size(max = 255, message = "OIB može sadržavati najviše 255 znakova")
        @NotNull(message = "OIB je obavezan") String oib,
        @Size(max = 255, message = "Adresa može sadržavati najviše 255 znakova")
        @NotNull(message = "Adresa je obavezna") String adresa,
        @Size(max = 255, message = "Država može sadržavati najviše 255 znakova")
        @NotNull(message = "Država je obavezna") String drzava,
        @Size(max = 255, message = "Poštanski broj može sadržavati najviše 255 znakova")
        @NotNull(message = "Poštanski broj je obavezan") String postanskiBroj,
        @Size(max = 255, message = "Grad može sadržavati najviše 255 znakova")
        @NotNull(message = "Grad je obavezan") String grad,
        @Size(max = 255, message = "Kontakt osoba može sadržavati najviše 255 znakova") String kontaktOsoba,
        @Email(message = "Unesite valjanu email adresu")
        @Size(max = 255, message = "Email može sadržavati najviše 255 znakova") String email,
        @Size(max = 255, message = "Telefon može sadržavati najviše 255 znakova") String telefon,
        @Size(max = 255, message = "PIB može sadržavati najviše 255 znakova") String pib,
        @Size(max = 255, message = "IBT može sadržavati najviše 255 znakova") String ibt,
        @Size(max = 255, message = "RBT može sadržavati najviše 255 znakova") String rbt,
        @Size(max = 255, message = "Djelatnost može sadržavati najviše 255 znakova") String djelatnost
) {}
